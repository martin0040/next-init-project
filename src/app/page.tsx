
"use client";

import Head from 'next/head';
import styles from '../app/styles/Home.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentLogos, setCurrentLogos] = useState<{ src: string; alt: string }[]>([] as { src: string; alt: string }[]);
  const [batchIndex, setBatchIndex] = useState(0);

  const logos: { src: string, alt: string }[] = [
    { src: '/monzo.png', alt: 'Ramp' },
    { src: '/remote.png', alt: 'Vercel' },
    { src: '/mercury.png', alt: 'Scale' },
    { src: '/boom.png', alt: 'Arc' },
    { src: '/runway.png', alt: 'Cash App' },
    { src: '/descript.png', alt: 'Retool' }
  ];

  const LOGOS_PER_BATCH = 6;

  useEffect(() => {
    const start = batchIndex * LOGOS_PER_BATCH;
    const end = start + LOGOS_PER_BATCH;
    setCurrentLogos(logos.slice(start, end));

    const timer = setInterval(() => {
      setBatchIndex((prevIndex) => (prevIndex + 1) % Math.ceil(logos.length / LOGOS_PER_BATCH));
    }, 3000);

    return () => clearInterval(timer); // Cleanup the timer
  }, [batchIndex]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Linear - A tool for planning and building products</title>
        <meta name="description" content="A tool for planning and building products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}>Linear</div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#method">Method</a>
          <a href="#customers">Customers</a>
          <a href="#changelog">Changelog</a>
          <a href="#pricing">Pricing</a>
          <a href="#company">Company</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.login}>Log in</button>
          <button className={styles.signup}>Sign up</button>
        </div>
      </nav>

      <main className={styles.main}>
        <h1>Linear is a purpose-built tool for <br /> planning and building products</h1>
        <p>
          Meet the system for modern software development.<br /> Streamline issues,
          projects, and product roadmaps.
        </p>
        <button className={styles.startButton}>Start building</button>
        <button className={styles.newFeature}>New: Conversations on Quality <span>&gt;</span></button>
      </main>

      <Image
        src="/Capture.png"
        alt="Product illustration"
        width={1400}
        height={1500}
        className={styles.productImage}
      />

      <section className={styles.logosSection}>
        <p className={styles.logosText}>
          Powering the world best product teams. <br />
          <span>From next-gen startups to established enterprises.</span>
        </p>

        <div className={styles.logosContainer}>
          {currentLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image src={logo.src} alt={logo.alt} width={100} height={40} />
            </div>
          ))}
        </div>
      </section>
      {/* Made the Morden products */}
      <div className={styles.featuresSection}>
        <div className={styles.madefor}>
          <h1 className={styles.title}>Made for modern <br />product teams</h1>
          <p className={styles.description}>
            Linear is shaped by the practices and principles <br />
            that distinguish world-class product teams <br />
            from the rest: relentless focus, fast execution, <br /> and a commitment to the quality of craft.
          </p>
        </div>


        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image src="/Capture5.png" alt="Product Development" width={200} height={150} />
            <h2 className={styles.cardTitle}>Purpose-built for product development</h2>
          </div>
          <div className={styles.card}>
            <Image src="/Capture6.png" alt="Fast Execution" width={200} height={150} />
            <h2 className={styles.cardTitle}>Designed to move fast</h2>
          </div>
          <div className={styles.card}>
            <Image src="/Capture7.png" alt="Crafted Perfection" width={200} height={150} />
            <h2 className={styles.cardTitle}>Crafted to perfection</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

