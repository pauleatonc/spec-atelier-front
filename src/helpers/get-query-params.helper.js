const handleGetQueryParam = ({ uri, param }) => uri.split(`?${param}=`)[1];

export default handleGetQueryParam;
