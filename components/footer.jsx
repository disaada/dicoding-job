import Image from "next/image";
import {
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Twitter as TwitterIcon,
  FiberManualRecord as FiberManualRecordIcon 
} from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
        <section>
          <Image
            src="/logo/master.png"
            width={100}
            height={100}
            alt="master-logo"
          />
          <p>
            Dicoding Space Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying
            Kaler, Kota Bandung Jawa Barat 40123
          </p>
        </section>
        <section>
          <p>Decode ideas Discover Potential</p>
          <div>
            <InstagramIcon />
            <YouTubeIcon />      
            <TwitterIcon />
          </div>
        </section>
        <section>
          <p>&#169; Dicoding Indonesia 2022</p>
          <p>
            <Link href='/'>
              <a href="#">Term</a>
            </Link>
            <FiberManualRecordIcon />
            <Link href='/'>
              <a href="#">Privacy</a>
            </Link>
          </p>
        </section>
      </footer>
  )
}

export default Footer