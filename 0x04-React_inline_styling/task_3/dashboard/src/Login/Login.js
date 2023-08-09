
import React from 'react';
import { StyleSheet, css } from "aphrodite";

export default function Login () {
    return (
        <body className={css(styleLogin.appbody)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styleLogin.inputWrapper)}>
                <label className={css(styleLogin.screen)} htmlFor="email">Email:</label>

            </div>
            
            <input className={css(styleLogin.inputlogin)} type="email" name="email" id="email"></input>
            <div className={css(styleLogin.inputWrapper)}>
                <label htmlFor="password">Password:</label>

            </div>
            
            <input className={css(styleLogin.inputlogin.screen)} type="password" name="password" id="password"></input>
            <div className={css(styleLogin.inputWrapper)}>
                <button>OK</button>

            </div>

            
      </body>
    );
}

const styleLogin = StyleSheet.create({
    appbody: {
        textAlign: 'left',
        margin: '50px'
    },

    inputlogin: {
        marginRight: 10,
    },

    
    '@media (max-width 900px)': {
        inputWrapper: {
            display: 'block'
        },

    }
})