import Document, { Head, Main, NextScript } from 'next/document'

const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'
const path = pro ? (test ? '' : 'http://public.duduapp.net/finance/static') : ''

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage()
    return {
      html, head, errorHtml, chunks,
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/*<meta name="version" content="1.0.0" />*/}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src={`${path}/static/js/rem.js`} />
          <link rel="stylesheet" href={`${path}/static/styles/antd_mobile_min.css`} />
          <link rel="stylesheet" href={`${path}/static/styles/app_min.css?8`} />
          <link rel="stylesheet" href={`${path}/static/css/common.css?8`} />
          <link rel="stylesheet" href={`${path}/static/css/antdEdit.css?8`} />
          <link rel="stylesheet" href={`${path}/static/css/public.css?8`} />
          <title>壹点灵</title>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
          <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" />
          <script src={`${path}/static/scripts/hd.js`} />
          <script src={`${path}/static/scripts/local-storage.js`} />
        </body>
      </html>
    )
  }
}
