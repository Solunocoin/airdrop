import Link from 'next/link';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCard}>
          <div className={styles.footerTopGradient}></div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerTop}>
            <div className={styles.footerTopInner}>
              <h2>Own a piece of Soluno and be part of the history.</h2>
            </div>
            <ButtonPrimary href="https://t.me/solunocoin" text="Join us" />
          </div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerMiddle}>
            <div className={styles.footerMiddleLogoContainer}>
              <a href="#" className={styles.footerMiddleLogoLink}>
                <img
                  src="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/66116f31f69a1654a5e3f670_Removal-572%201.png"
                  loading="lazy"
                  alt=""
                  className={styles.footerMiddleLogoImg}
                />
                <div className={styles.footerMiddleLogoText}>Soluno</div>
              </a>
            </div>
            <div className={styles.footerMiddleLinks}>
              <div className={styles.footerMiddleLinksTitle}>Main pages</div>
              <div className={styles.footerMiddleLinksListContainer}>
                <ul role="list" className={styles.footerMiddleLinksList}>
                  <li className={styles.footerMiddleLinksListItem}>
                    <a
                      href="/"
                      aria-current="page"
                      className="footer-link w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li className={styles.footerMiddleLinksListItem}>
                    <Link
                      href="/"
                      className="footer-link"
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Airdrop
                    </Link>
                  </li>
                  <li className={styles.footerMiddleLinksListItem}>
                    <a href="/coming-soon" className="footer-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerMiddleLinks}></div>
          </div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomCopyright}>
              Copyright © Soluno{' '}
            </div>
            <div className={styles.footerBottomSocialLinks}>
              <a
                href="https://twitter.com/soluno_coin"
                target="_blank"
                className={styles.footerBottomSocialLink}
              >
                <img
                  src="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/66133684b0e7dac2568f454a_x-logo-white-removebg-preview%201.png"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://t.me/solunocoin"
                target="_blank"
                className={styles.footerBottomSocialLink}
              >
                <img
                  src="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/65f6450e37f5eb315e0709df_telegram-icon.png"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerBottomGradient}>
            <img
              src="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/65fc81788e67256b0fa4f12b_Mask%20group%20(6).png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 1439px) 95vw, 1230px"
              srcSet="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/65fc81788e67256b0fa4f12b_Mask%20group%20(6)-p-500.png 500w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/65fc81788e67256b0fa4f12b_Mask%20group%20(6)-p-800.png 800w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/65fc81788e67256b0fa4f12b_Mask%20group%20(6).png 876w"
              alt=""
              className="bg-gradient-bottom"
            />
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32).png"
          loading="eager"
          data-w-id="59a0c9f7-296b-773a-326e-b1cc37aba3e4"
          sizes="(max-width: 1439px) 100vw, 1124px"
          alt=""
          srcSet="https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32)-p-500.png 500w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32)-p-800.png 800w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32)-p-1080.png 1080w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32)-p-1600.png 1600w, https://assets-global.website-files.com/65f5f73df9ed005fb30a00c0/661209e66bb015733c906e8d_Mask%20group%20(32).png 2000w"
          className={styles.footerBgImage}
        />
      </div>
    </footer>
  );
};

export default Footer;
