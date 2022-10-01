import Image from "next/image";
import Link from "next/link";
import { Select, UnionIcon } from ".";
import { Avatar } from "@mui/material";
import styled from "@emotion/styled";

const Header = styled.header`
  background-color: #18181B
`

const HeaderNav = () => {
  return (
    <Header>
      <div>
        <Image
          src="/logo/logo.png"
          width={100}
          height={100}
          alt="dicoding-logo"        
        />
        |
        <Link href="/">
          <a href="#">Looking for job</a>
        </Link>
        <Link href="/">
          <a href="#">Hiring</a>
        </Link>
      </div>
      <div>
        <Select />
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        <Select />
        <UnionIcon style={{ color: "black" }} />
      </div>
    </Header>
  );
};

export default HeaderNav;
