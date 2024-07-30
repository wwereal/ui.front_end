// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as UI from '../../ui/legacy/legacy.js';
export class DataTrackPaneImpl extends UI.Widget.VBox {
    constructor() {
        super(true);
        this.setHideOnDetach();
        this.element = document.createElement('div');
        this.element.style.width = '100%';
        this.element.innerHTML = '<h1>DATA_TRACK PANE MODIFIED</h1>';
    }
}
