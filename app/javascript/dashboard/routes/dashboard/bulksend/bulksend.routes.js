import BulkSend from './components/BulkSend.vue';
/* eslint arrow-body-style: 0 */
import { frontendURL } from '../../../helper/URLHelper';

export const routes = [
  {
    path: frontendURL('accounts/:accountId/bulk-send'),
    component: BulkSend,
    name: 'bulk_send',
    meta: {
      permissions: ['administrator'],
    },
  },
];
