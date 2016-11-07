/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const ImmutableComponent = require('../components/immutableComponent')

// Stylesheets go here
require('../../less/about/styles.less')
require('../../less/button.less')
require('../../less/forms.less')

class AboutStyle extends ImmutableComponent {
  render () {
    return <div>
      <h1 className='typography' data-l10n-id='typography' />
      <h1 data-l10n-id='h1' />
      <h2 data-l10n-id='h2' />
      <h3 data-l10n-id='h3' />
      <h4 data-l10n-id='h4' />

      <h2 data-l10n-id='forms' />
      <div className='container'>
        <input placeholder='Input box' className='form-control' type='text' />
        <pre><code>
          // require('less/forms.less')
          &lt;input className='form-control' type='text' />
        </code></pre>
      </div>
      <div className='container'>
        <select className='form-control'>
          <option>Select Box</option>
          <option>Second Choice</option>
          <option>Third Choice</option>
        </select>
        <pre><code>
          &lt;select className='form-control'>
            &lt;option>Select Box&lt;/option>
            &lt;option>Second Choice&lt;/option>
            &lt;option>Third Choice&lt;/option>
          &lt;/select>
        </code></pre>
      </div>
      <h2 data-l10n-id='buttons' />
      <span data-l10n-id='cancel' className='browserButton whiteButton inlineButton' onClick={this.onRemoveBookmark} />
      <span data-l10n-id='done' className='browserButton primaryButton' onClick={this.onRemoveBookmark} />
    </div>
  }
}

module.exports = <AboutStyle />
