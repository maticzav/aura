import {css} from 'glamor'

const styles = {
    container: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column'
    },
    global: {
        height: '100%',
        margin: '0',
        padding: '0',
        fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif',
        textRendering: 'geometricPrecision'
    },
    next: {
        height: '100%'
    }
}

css.global('body, html', styles.global)
css.global('#__next, #__next>div', styles.next)

export default({children}) => (
    <main className={css(styles.container)}>
        {children}
    </main>
)
