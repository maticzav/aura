import {css} from 'glamor'

export default({children}) => (
    <main className={css(styles.container)}>
        {children}
        <style jsx global>
            {
                `html,
                body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

                    text-rendering: geometricPrecision;
                }

                #__next {
                    height: 100%;
                }`}</style>
    </main>

)

const styles = {
    container: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column'
    }
}
