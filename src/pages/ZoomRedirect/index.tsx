import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRoles, getZoomLinks } from 'util/api';

type ZoomParams = {
  id: string;
};

const ZoomRedirect = (): JSX.Element => {
  const { id } = useParams<ZoomParams>();

  useEffect(() => {
    const main = async () => {
      const roles = await getRoles();
      if (!roles.includes('Attendee')) {
        alert("Please register and RSVP to access Zoom links. If you're having trouble, please email contact@hackillinois.org or ping @Help Desk on the Discord");
        window.location.replace('/');
      } else {
        const zoomLinks = await getZoomLinks();
        if (!zoomLinks[id]) {
          alert('Error redirecting to Zoom. If this error persists, please ping @Help Desk on the Discord or email contact@hackillinois.org');
          window.location.replace('/');
        } else {
          window.location.replace(zoomLinks[id]);
        }
      }
    };

    main().catch((err) => {
      console.error(err);
      alert('Error redirecting to Zoom. If this error persists, please ping @Help Desk on the Discord or email contact@hackillinois.org');
      window.location.replace('/');
    });
  }, [id]);

  return <div>Loading...</div>;
};

export default ZoomRedirect;
