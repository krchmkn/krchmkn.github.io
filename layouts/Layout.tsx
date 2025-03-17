import { ReactNode, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import Offline from "@/components/Offline";
import styles from "@/styles/Layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Offline data-test-id="offline" />

      <div className={styles.container} data-test-id="layout">
        <header className={styles.header} data-test-id="layout-header">
          <Header />
        </header>

        <main className={styles.main} data-test-id="layout-main">
          {children}
        </main>

        <footer className={styles.footer} data-test-id="layout-footer"></footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
