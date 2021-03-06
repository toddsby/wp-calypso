/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-pure-render/mixin';

/**
 * Internal dependencies
 */
import { getLabelForStream } from './locales'

export default React.createClass( {
	displayName: 'NotificationSettingsFormHeader',

	mixins: [ PureRenderMixin ],

	propTypes: {
		stream: PropTypes.string,
		title: PropTypes.string
	},

	renderTitle() {
		return getLabelForStream( this.props.stream ) || this.props.title;
	},

	render() {
		return (
			<div className="notification-settings-form-header">
				<div className="notification-settings-form-header__title">
					{ this.props.stream === 'timeline' ? <span className="noticon noticon-bell"></span> : this.renderTitle() }
				</div>
			</div>
		);
	}
} );
