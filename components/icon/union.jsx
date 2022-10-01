import { SvgIcon } from "@mui/material";

const UnionIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C7.58172 2 4 5.58172 4 10V17H3V19H21V17H20V10C20 5.58172 16.4183 2 12 2ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18Z"
      />
      <path d="M10 20V22H14V20H10Z"/>
    </SvgIcon>
  );
};

export default UnionIcon;
