'use client';
import { memo, useCallback, useEffect, useState } from 'react';
import { FaEnvelopeOpenText, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaZhihu } from 'react-icons/fa';
import styles from './styles.module.css';
import { ModeToggle } from './mode-toggle';
import { siteConfig } from '#/config/site';

const github = 'zykson';
const youtube = 'zykson';
const twitter = 'zykson';
const newsletter = 'zykson';
const author = 'zykson';
const zhihu = null;
const linkedin = null;

export const FooterImpl = () => {
    const { twitter, github, youtube } = siteConfig.links;
  
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>copyright 2022 zyk</div>
      <div className={styles.settings}>
       <ModeToggle/>
      </div>
      <div className={styles.social}>
        {twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${twitter}`}
            title={`Twitter @${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}

        {github && (
          <a
            className={styles.github}
            href={`https://github.com/${github}`}
            title={`GitHub @${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        )}

        {youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${youtube}`}
            title={`YouTube ${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  );
};

export const Footer = memo(FooterImpl);
