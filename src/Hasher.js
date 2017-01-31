import React, {Component} from 'react';
import {css, merge} from 'glamor';
import hasher from 'hash-index';

export default class Hasher extends Component {
    constructor() {
        super()
        this.hash = this.hash.bind(this)
        this.state = {
            hash: hasher('', 360),
            focus: false
        }
    }

    hash(e) {
        const name = e.target.value.trim();
        const hash = hasher(name, 360);
        console.log(hash);
        this.setState({hash})
    }

    render() {
        return (
            <div className={merge(css(styles.main), css(gradient(this.state.hash)), css(focus(this.state.focus)))}>
                <div className={css(styles.inputContainer)}>
                    <input className={css(styles.input)} onChange={this.hash} placeholder="Enter your name."/>
                </div>

            </div>
        )
    }
}

const gradient = (hash) => {
    const t1 = `hsl(${hash - 55}, 100%, 50%)`;
    const t2 = `hsl(${hash + 55}, 100%, 50%)`;

    return {
        background: `linear-gradient(${t1}, ${t2})` // bg-gradient
    }
}

const focus = (focus) => {
    return {}
}

const styles = {
    main: {
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center'
    },
    inputContainer: {
        width: '80%',
        margin: 'auto',
        lineHeight: '32px',
        maxWidth: '400px',
        borderBottom: '2px solid white'
    },
    input: {
        color: 'white',
        border: '0',
        textAlign: 'center',
        width: '242px',
        lineHeight: '22px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'transparent',
        ':focus': {
            outline: 'none'
        },
        '::placeholder': {
            color: 'white'
        }
    }
}
