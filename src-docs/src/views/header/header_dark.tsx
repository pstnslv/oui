/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React from 'react';

/**
 * Docs note: Consuming apps should import the theme via the export json file
 * import theme from '@opensearch-project/oui/dist/oui_theme_light.json';
 */

import {
  OuiHeader,
  OuiHeaderLogo,
  OuiHeaderLinks,
  OuiHeaderLink,
  OuiHeaderSectionItemButton,
} from '../../../../src/components/header';
import { OuiBadge } from '../../../../src/components/badge';
import { OuiIcon } from '../../../../src/components/icon';
import { OuiAvatar } from '../../../../src/components/avatar';

export default ({ theme }: { theme: any }) => (
  <OuiHeader
    theme="dark"
    sections={[
      {
        items: [
          <OuiHeaderLogo>OpenSearch</OuiHeaderLogo>,
          <OuiHeaderLinks aria-label="App navigation dark theme example">
            <OuiHeaderLink isActive>Docs</OuiHeaderLink>
            <OuiHeaderLink>Code</OuiHeaderLink>
            <OuiHeaderLink iconType="help"> Help</OuiHeaderLink>
          </OuiHeaderLinks>,
        ],
        borders: 'right',
      },
      {
        items: [
          <OuiBadge
            color={theme.ouiColorDarkestShade.rgba}
            iconType="arrowDown"
            iconSide="right">
            Production logs
          </OuiBadge>,
          <OuiHeaderSectionItemButton
            aria-label="2 Notifications"
            notification={'2'}>
            <OuiIcon type="cheer" size="m" />
          </OuiHeaderSectionItemButton>,
          <OuiHeaderSectionItemButton aria-label="Account menu">
            <OuiAvatar name="John Username" size="s" />
          </OuiHeaderSectionItemButton>,
        ],
        borders: 'none',
      },
    ]}
  />
);
