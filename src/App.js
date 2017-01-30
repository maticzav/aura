import React, {Component} from 'react';
import {css} from 'glamor';
import Hasher from './Hasher';

export default() => (
    <main className={css(styles.main)}>
        <div className={css(styles.hasher)}>
            <Hasher/>
        </div>
        <span className={css(styles.by)}>
            Made with
            <span className={css(styles.heart)}>&#10084;</span>
             by
            <a className={css(styles.twitter)} href="https://twitter.com/zavadlalm">
                @zavadlalm
            </a>
        </span>
    </main>
)

const styles = {
    by: {
        padding: '20px 0',
        display: 'inline-block',
        fontSize: '12px',
        width: '90%',
        margin: '0 auto'
    },
    heart: {
        color: '#cc2e49',
        fontSize: '20px',
        lineHeight: '12px'
    },
    twitter: {
        color: '#805d2f',
        textDecoration: 'none',
        marginLeft: '5px'
    },
    hasher: {
        flex: '1',
        position: 'relative'
    },
    main: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column'
    }
}
