import React, {Component} from 'react';
import {css, merge} from 'glamor';

export default class Hasher extends Component {
    constructor() {
        super()
        this.state = {
            hash: 0
        }
    }

    hash(text) {
        const hash = 1;
        this.setState({hash})
    }

    render() {
        return (
            <div className={merge(css(styles.main), css(gradient(this.state.hash)))}>
                <div className={css(styles.inputContainer)}>
                    <input className={css(styles.input)} onChange={this.hash} placeholder="Enter your name."></input>
                </div>

            </div>
        )
    }
}

const gradient = (hash) => {
    const bg = '4CD96E';
    const end = '5892B0';

    return {backgroud: `linear-gradient(#${bg}, #${end})`}
}

const styles = {
    main: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: 'black',
        textAlign: 'center'
    },
    inputContainer: {
        width: '90%',
        margin: '200px auto',
        lineHeight: '32px',
        maxWidth: '400px',
        borderBottom: '1px solid white'
    },
    input: {
        color: 'white',
        textAlign: 'center',
        width: '242px',
        lineHeight: '22px',
        fontSize: '12px',
        backgroundColor: 'transparent',
        ':focus': {
            outline: 'none'
        }
    }
}
