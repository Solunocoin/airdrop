'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import soluno_logo from '../../../public/soluno_logo.png';
import telegram_log_white from '../../../public/telegram_logo_white.png';
import x_logo_white from '../../../public/x-logo-white.png';
import Container from '../Container/Container';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Check if the screen width is greater than 992px
      if (window.innerWidth > 991) {
        setShowMenu(false); // Set showMenu to false
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially in case the initial window size is more than 992px
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and once on unmount

  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContentWrapper}>
          <div className={styles.headerLeftSide}>
            <a href="/" aria-current="page" className={styles.headerLogoLink}>
              <Image
                src={soluno_logo}
                width={80}
                height={80}
                alt="Soluno Logo"
              />
              <div className={styles.headerLogoLinkText}>Soluno</div>
            </a>
            <nav role="navigation" className={styles.headerMenuWrapper}>
              <ul role="list" className={styles.headerNavMenuList}>
                <li className={styles.headerNavListItem}>
                  <a
                    href="https://www.soluno.io/"
                    aria-current="page"
                    className={styles.headerNavLink}
                  >
                    Home
                  </a>
                </li>
                <li className={styles.headerNavListItem}>
                  <a
                    href="https://www.soluno.io/coming-soon"
                    className={styles.headerNavLink}
                  >
                    About
                  </a>
                </li>
                <li className={styles.headerNavListItem}>
                  <a
                    href="https://www.soluno.io/coming-soon"
                    className={styles.headerNavLink}
                  >
                    Blog
                  </a>
                </li>
                <li
                  className={clsx(
                    styles.headerNavListItem,
                    styles.headerNavListBtn,
                  )}
                >
                  <div className={styles.headerBtnPrimaryWrapper}>
                    <a
                      href="https://t.me/solunocoin"
                      className={styles.headerBtnPrimary}
                      target="_blank"
                    >
                      Join Us
                      <span className={styles.lineRoundedIcon}></span>
                    </a>
                    <div className={styles.headerBtnPrimaryBorder}></div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerRightSide}>
            <div className={styles.socialMediaLinksContainer}>
              <a
                href="https://twitter.com/soluno_coin"
                target=" _blank"
                className={styles.socialLinkSingle}
              >
                <Image
                  src={x_logo_white}
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="telegram logo"
                />
              </a>
              <a
                href="https://t.me/solunocoin"
                target="_blank"
                className={styles.socialLinkSingle}
              >
                <Image
                  src={telegram_log_white}
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="X logo"
                />
              </a>
            </div>
            <div className={styles.headerBtnPrimaryWrapper}>
              <a
                href="https://t.me/solunocoin"
                className={styles.headerBtnPrimary}
                target="_blank"
              >
                Join Us
                <span className={styles.lineRoundedIcon}></span>
              </a>
              <div className={styles.headerBtnPrimaryBorder}></div>
            </div>
            <div
              className={styles.hamburgerMenuWrapper}
              onClick={() => setShowMenu(!showMenu)}
            >
              <div
                className={clsx(
                  styles.hamburgerMenuBar,
                  showMenu && styles.activeTop,
                )}
              ></div>
              <div
                className={clsx(
                  styles.hamburgerMenuBar,
                  showMenu && styles.activeBottom,
                )}
              ></div>
            </div>
          </div>
        </div>
      </Container>
      <div
        className={clsx(styles.mobileMenu, showMenu && styles.mobileMenuActive)}
      >
        <nav
          role="navigation"
          className={clsx(
            styles.headerMenuWrapper,
            showMenu && styles.headerMenuWrapperActive,
          )}
        >
          <ul role="list" className={styles.headerNavMenuList}>
            <li className={styles.headerNavListItem}>
              <a
                href="https://www.soluno.io/"
                aria-current="page"
                className={styles.headerNavLink}
              >
                Home
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a
                href="https://www.soluno.io/coming-soon"
                className={styles.headerNavLink}
              >
                About
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a
                href="https://www.soluno.io/coming-soon"
                className={styles.headerNavLink}
              >
                Blog
              </a>
            </li>
            <li
              className={clsx(
                styles.headerNavListItem,
                styles.headerNavListBtn,
                showMenu && styles.headerNavListBtnActive,
              )}
            >
              <div
                className={clsx(
                  styles.headerBtnPrimaryWrapper,
                  showMenu && styles.headerBtnPrimaryWrapperActive,
                )}
              >
                <a
                  href="https://t.me/solunocoin"
                  className={styles.headerBtnPrimary}
                  target="_blank"
                >
                  Join Us
                  <span className={styles.lineRoundedIcon}></span>
                </a>
                <div className={styles.headerBtnPrimaryBorder}></div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
