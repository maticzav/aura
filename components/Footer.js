import {css} from 'glamor'

export default() => (
    <footer className={css(styles.footer)}>
        Made with
        <span className={css(styles.heart)}>&#10084;</span>
        by
        <a className={css(styles.twitter)} href="https://twitter.com/zavadlalm">@zavadlalm</a>
    </footer>
)

const styles = {
    footer: {
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
        textDecoration: 'none'
    }
}
