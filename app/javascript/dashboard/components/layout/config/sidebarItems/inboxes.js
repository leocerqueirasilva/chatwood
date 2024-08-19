import { FEATURE_FLAGS } from '../../../../featureFlags';
import { frontendURL } from '../../../../helper/URLHelper';

const inboxes = accountId => ({
  parentNav: 'inbox',
  routes: [
    'agent_list',
    'settings_inbox_finish',
    'settings_inbox_list',
    'settings_inbox_new',
    'settings_inbox_show',
    'settings_inboxes_add_agents',
    'settings_inboxes_page_channel',
    'settings_teams_add_agents',
    'settings_teams_edit_finish',
    'settings_teams_edit_members',
    'settings_teams_edit',
    'settings_teams_finish',
    'settings_teams_list',
    'settings_teams_new',
  ],
  menuItems: [
    {
      icon: 'mail-inbox-all',
      label: 'INBOXES',
      hasSubMenu: false,
      meta: {
        permissions: ['administrator'],
      },
      toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
      toStateName: 'settings_inbox_list',
      featureFlag: FEATURE_FLAGS.INBOX_MANAGEMENT,
    },
    {
      icon: 'people',
      label: 'AGENTS',
      hasSubMenu: false,
      meta: {
        permissions: ['administrator'],
      },
      toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
      toStateName: 'agent_list',
      featureFlag: FEATURE_FLAGS.AGENT_MANAGEMENT,
    },
    {
      icon: 'people-team',
      label: 'TEAMS',
      hasSubMenu: false,
      meta: {
        permissions: ['administrator'],
      },
      toState: frontendURL(`accounts/${accountId}/settings/teams/list`),
      toStateName: 'settings_teams_list',
      featureFlag: FEATURE_FLAGS.TEAM_MANAGEMENT,
    },
  ],
});

export default inboxes;
