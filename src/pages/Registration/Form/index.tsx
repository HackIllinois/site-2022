import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegistrationType } from 'util/types';
import { getRegistration, getRoles, refreshToken, register } from 'util/api';
import PROJECTOR from 'assets/registration/projector.svg';
import Button from 'components/form/Button';
import { registrationSchema, RegistrationSchema, errorMap, defaultValues } from '../validation';
import Welcome from './screens/Welcome';
import PersonalInfo from './screens/PersonalInfo';
import RaceDemographics from './screens/RaceDemographics';
import Education from './screens/Education';
import Experience from './screens/Experience';
import Finish from './screens/Finish';

import styles from './styles.module.scss';

type FormProps = {
  formIndex: number,
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
};

const fields: (keyof RegistrationSchema)[][] = [
  [],
  ['name', 'email', 'location', 'timezone', 'gender'],
  ['race'],
  ['degreePursued', 'graduationYear', 'school', 'major'],
  ['programmingYears', 'programmingAbility', 'hasInternship', 'resumeFilename'],
  [],
];

const pages = [Welcome, PersonalInfo, RaceDemographics, Education, Experience, Finish];
const submitPageIndex = pages.length - 2;

const convertToAPI = (data: RegistrationSchema): RegistrationType => {
  const { name, race: possibleRace, ...registration } = data;
  const [firstName, ...remainingWords] = name.split(' ');
  const lastName = remainingWords.join(' ') || ' ';
  const race = possibleRace.length === 0 ? ['Prefer Not to Answer'] : possibleRace;
  return { ...registration, firstName, lastName, race };
};

const convertFromAPI = (registration: RegistrationType): RegistrationSchema => {
  const { firstName, lastName, ...remaining } = registration;
  const name = firstName ? (`${firstName} ${lastName}`).trim() : '';
  return { ...remaining, name };
};

const Form = ({ formIndex, setFormIndex }: FormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const methods = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema, { errorMap }),
    defaultValues,
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    getRoles().then((roles) => {
      if (roles.includes('Applicant')) {
        setIsEditing(true);
        return getRegistration('attendee');
      }
      return null;
    }).then((registrationWithId) => {
      if (registrationWithId) {
        const { id, ...registration } = registrationWithId;
        methods.reset(convertFromAPI(registration));
      }
    }).finally(() => {
      setIsLoading(false);
    });
  }, []); // deliberately not including `methods`

  const onSubmit: SubmitHandler<RegistrationSchema> = (data) => {
    console.log(data);

    setIsLoading(true);
    return register(isEditing, 'attendee', convertToAPI(data)).then(() => {
      setFormIndex(pages.length - 1);
      refreshToken(); // token changes after registration, so need to refetch
    }).catch(() => {
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const onError: SubmitErrorHandler<RegistrationSchema> = (errorData) => {
    console.log(errorData);
    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].some((field) => errorData[field])) {
        console.log(methods.getValues());
        setFormIndex(i);
        return;
      }
    }
  };

  const nextPage = () => setFormIndex((current) => current + 1);
  const previousPage = () => setFormIndex((current) => current - 1);

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${PROJECTOR}")` }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
          {pages.map((Page, i) => (
            // the array should be constant, so using index as key is fine
            // eslint-disable-next-line react/no-array-index-key
            <div className={clsx(styles.screenContainer, formIndex === i && styles.visible)} key={i}>
              <Page />

              {formIndex !== pages.length - 1 && ( // last page does not have any buttons
                <div className={styles.buttons}>
                  <Button arrow="left" hidden={formIndex === 0} onClick={previousPage} />
                  <div className={styles.spacer} />
                  {isLoading && <Button loading>Loading...</Button>}
                  {(!isLoading && formIndex !== submitPageIndex) && <Button arrow="right" onClick={nextPage}>Next</Button>}
                  {(!isLoading && formIndex === submitPageIndex) && <Button type="submit">Submit</Button>}
                </div>
              )}
            </div>
          ))}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
