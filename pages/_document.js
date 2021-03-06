import Document, {Head, Main, NextScript} from 'next/document'
import {renderStatic} from 'glamor/server'

export default class MyDocument extends Document {
    static async getInitialProps({renderPage}) {
        const page = renderPage()
        let styles = renderStatic(() => page.html)
        return {
            ...page,
            ...styles
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>aura</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <style dangerouslySetInnerHTML={{
                        __html: this.props.css
                    }}/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}
