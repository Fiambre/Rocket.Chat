import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';

import { MessageTypes } from '../../ui-utils';
import { settings } from '../../settings';

Meteor.startup(function() {

	MessageTypes.registerType({
		id: 'jitsi_call_started',
		system: true,
		message: "Started_a_video_call",
	});
});
