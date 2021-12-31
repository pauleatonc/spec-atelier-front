import styled from 'styled-components';
import {
  WHITE,
  MEDIA_QUERY_SMALL,
  CARIBBEAN_GREEN,
  SILVER,
  MERCURY,
  ALTO,
  ALABASTER,
  SCORPION,
  GALLERY,
} from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: 100%;
  padding: 20px;
  max-width: ${({ isModalSuccess }) => (isModalSuccess ? '380px' : '954px')};
  display: flex;
  flex-wrap: wrap;
  background-color: ${WHITE};
  ${MEDIA_QUERY_SMALL} {
    max-width: ${({ isModalSuccess }) => (isModalSuccess ? '380px' : '100%')};
  }
`;

export const ButtonCloseContainer = styled.div`
  width: 100%;
  padding-top: 27px;
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ isSuccessModal }) => (isSuccessModal ? '0px' : '28px')};
`;

export const DetailPlanContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 65px 125px 78px;
  justify-content: space-between;
  ${MEDIA_QUERY_SMALL} {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 36px 50px 36px;
  }
`;

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  ${MEDIA_QUERY_SMALL} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 52px;
  }
`;

export const Title = styled.h1`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  color: ${CARIBBEAN_GREEN};
  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  font-family: Lato;
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  line-height: 20px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${SILVER};
  margin-bottom: 21px;
`;

export const TitleInfo = styled.p`
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

export const IconCheck = styled.i`
  font-size: 12px;
  color: ${CARIBBEAN_GREEN};
  margin-right: 10px;
`;

export const ItemDesc = styled.p`
  font-family: Lato;
  font-size: 12px;
  line-height: 14px;
`;

export const FooterInfo = styled.p`
  margin-top: 25px;
  font-family: Lato;
  font-size: 12px;
  max-width: 280px;
`;

export const PlanCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${MEDIA_QUERY_SMALL} {
    align-items: center;
  }
`;

export const ContainerInputCost = styled.div`
  height: 120px;
  display: flex;
  border-radius: 15px;
  border: solid 1px ${MERCURY};
  margin-bottom: 40px;
  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
    height: 210px;
    width: 100%;
    max-width: 290px;
    margin-bottom: 50px;
  }
`;

export const InputCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
  }
`;

export const Cost = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 5px 15px 15px 5px;
  border-left: solid 1px ${MERCURY};
  background-color: ${ALABASTER};
  padding-right: 30px;
  text-align: right;
  justify-content: center;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    height: 90px;
    border-left: none;
    border-top: solid 1px ${MERCURY};
    padding: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }
`;

export const PlanCost = styled.h1`
  font-family: Lato;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const PlanPeriod = styled.p`
  font-family: Lato;
  font-size: 12px;
`;

export const InputCost = styled.input`
  width: 85px;
  height: 36px;
  border-radius: 21.5px;
  border: solid 1px ${ALTO};
  text-align: center;
  margin-bottom: 20px;
  font-family: Lato;
  font-size: 18px;
  font-weight: bold;

  :focus-visible {
    outline: none;
  }
`;

export const InputCostLabel = styled.p`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.72px;
  text-align: center;
  width: 70%;
`;

export const StepsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${({ mBottom }) => `${mBottom}px`};
  padding: 0 65px 0 78px;
  ${MEDIA_QUERY_SMALL} {
    padding: 0 36px;
    align-items: flex-start;
    margin-bottom: ${({ mobileMBottom = '0' }) => `${mobileMBottom}px`};
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  margin-right: 46px;
  opacity: ${({ activeStep }) => (activeStep ? '1' : '0.49')};
  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
    justify-content: center;
    margin-right: 35px;
  }
`;

export const StepText = styled.h1`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
`;

export const StepNumber = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: solid 1px MINE_SHAFT;
  border-radius: 40px;
  margin-right: 5px;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  ${MEDIA_QUERY_SMALL} {
    margin-bottom: 7px;
  }
`;

export const ContainerFormPlan = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleForm = styled.h1`
  font-family: Lato;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${SCORPION};
  margin-bottom: 8px;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const SubtitleForm = styled.h3`
  font-family: Lato;
  font-size: 12px;
  text-align: center;
  color: ${SCORPION};
  margin-bottom: 56px;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const FormPlan = styled.form`
  display: flex;
  width: 100%;
  max-width: 725px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 45px;
  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const ContainerInputs = styled.div`
  width: 50%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 36px;
    height: ${({ textAreaContainer }) =>
      textAreaContainer ? '150px' : 'auto'};
    max-width: 100%;
  }
`;

export const InputForm = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 21.5px;
  border: solid 1px ${GALLERY};
  padding-left: 27px;
  margin-bottom: ${({ withoutMarginBottom }) =>
    withoutMarginBottom ? '0px' : '25px'};
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;

  :focus-visible {
    outline: none;
  }

  ${MEDIA_QUERY_SMALL} {
    margin-bottom: 13px;
    width: 100%;
    max-width: 300px;
  }
`;

export const TextAreaForm = styled.textarea`
  width: 350px;
  border-radius: 21.5px;
  border: solid 1px ${GALLERY};
  padding-left: 27px;
  padding-top: 9px;
  flex: 1;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  resize: none;

  :focus-visible {
    outline: none;
  }

  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    max-width: 300px;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  button {
    margin 0 5px;
  }
`;

export const ContainerModalSuccess = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 42px 50px 64px 50px;
`;

export const IconSuccess = styled.img`
  width: 74px;
  height: 72px;
  margin-bottom: 22px;
`;

export const TitleSuccess = styled.h1`
  width: 100%;
  font-family: Lato;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${SCORPION};
  margin-bottom: 10px;
`;

export const TextBodySuccess = styled.p`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  color: ${SCORPION};
`;
