import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderImages from 'components/slide-images';
import { getClients } from './ClientsImageSlider.actions';

const ClientsImageSlider = () => {
  const { clients } = useSelector((state) => state.clientsImageSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (!clients || !clients.length) return null;
  return <SliderImages images={clients} />;
};

export default ClientsImageSlider;
