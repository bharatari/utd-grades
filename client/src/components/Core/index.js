import React from 'react';
import classes from './styles.scss';
import { Icon, Popover } from 'antd';

function Core({ children }) {
  const donors = (
    <div style={{ width: '300px' }}>
      <p>Thank you to the following people for donating and making this possible (in order of most monetary support): Anthony-Tien Huynh, Adam Butcher, Paul Denino, Thomas Sowders, Xavier Brown, Enza Denino, David Garvin, Alastair Feille, Andrew Vaccaro and other anonymous donors.</p>      
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {children}
      </div>
      <div className={classes.footer}>
        <p>Built with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by <a href="https://www.acmutd.co">ACM Labs</a> and powered <Icon type="thunderbolt" theme="twoTone" twoToneColor="#ffcc00" /> by <a href="https://www.utdmercury.com">The Mercury</a>. Raw data available <a href="https://github.com/bharatari/utd-grades/tree/master/data">for download</a>.</p>
        <p>Designed by <a href="https://www.arimilli.io">Bharat Arimilli</a>. Thanks to <a href="https://garrettgu.com/">Garrett Gu</a>, <a href="https://jeffw.xyz/">Jeffrey Wang</a>, <a href="https://www.linkedin.com/in/josephwickline/">Joseph Wickline</a> and our <Popover content={donors}><span style={{ textDecoration: 'underline' }}>donors</span>.</Popover></p>
      </div>
    </div>
  );
};

export default Core;
