import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Container = styled.section`
	width: 100%;
	max-width: ${({ isModalSuccess }) => (isModalSuccess ? '380px' : '954px')};
	display: flex;
	flex-wrap: wrap;
	background-color: ${COLOR_WHITE};
	max-height: 566px;
`;

export const ButtonCloseContainer = styled.div`
	width: 100%;
	padding-top: 27px;
	padding-right: 30px;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 28px;
`;

export const DetailPlanContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 0 65px 125px 78px;
	justify-content: space-between;
`;

export const PlanDescription = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 265px;
`;

export const Title = styled.h1`
	font-family: Lato;
	font-size: 16px;
	font-weight: bold;
	color: #00bea7;
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
	background-color: #c9c9c9;
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
	color: #00bfa7;
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
`;

export const ContainerInputCost = styled.div`
	height: 120px;
	display: flex;
	border-radius: 15px;
	border: solid 1px #e5e5e5;
	margin-bottom: 40px;
`;

export const InputCostContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 270px;
`;

export const Cost = styled.div`
	width: 160px;
	display: flex;
	flex-direction: column;
	border-radius: 5px 15px 15px 5px;
	border-left: solid 1px #e5e5e5;
	background-color: #f8f8f8;
	padding-right: 30px;
	text-align: right;
	justify-content: center;
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
	border: solid 1px #dbdbdb;
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
`;

export const Step = styled.div`
	display: flex;
	align-items: center;
	margin-right: 46px;
	opacity: ${({ activeStep }) => (activeStep ? '1' : '0.49')};
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
	border: solid 1px black;
	border-radius: 40px;
	margin-right: 5px;
	font-family: Lato;
	font-size: 16px;
	font-weight: bold;
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
	color: #5a5a5a;
	margin-bottom: 8px;
`;

export const SubtitleForm = styled.h3`
	font-family: Lato;
	font-size: 12px;
	text-align: center;
	color: #5a5a5a;
	margin-bottom: 56px;
`;

export const FormPlan = styled.form`
	display: flex;
	width: 100%;
	max-width: 725px;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 45px;
`;

export const ContainerInputs = styled.div`
	width: 50%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
`;

export const InputForm = styled.input`
	width: 350px;
	height: 35px;
	border-radius: 21.5px;
	border: solid 1px #eeeeee;
	padding-left: 27px;
	margin-bottom: ${({ withoutMarginBottom }) =>
		withoutMarginBottom ? '0px' : '25px'};
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;

	:focus-visible {
		outline: none;
	}
`;

export const TextAreaForm = styled.textarea`
	width: 350px;
	border-radius: 21.5px;
	border: solid 1px #eeeeee;
	padding-left: 27px;
	padding-top: 9px;
	flex: 1;
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;

	:focus-visible {
		outline: none;
	}
`;

export const ContainerButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
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
	color: #5a5a5a;
	margin-bottom: 10px;
`;

export const TextBodySuccess = styled.p`
	font-family: Lato;
	font-size: 14px;
	text-align: center;
	color: #5a5a5a;
`;
