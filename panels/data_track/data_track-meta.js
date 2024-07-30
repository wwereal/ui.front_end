// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as UI from '../../ui/legacy/legacy.js';
let loadedDataTrackModule;
async function loadDataTrackModule() {
    if (!loadedDataTrackModule) {
        loadedDataTrackModule = await import('./data_track.js');
    }
    return loadedDataTrackModule;
}
UI.ViewManager.registerViewExtension({
    location: 'panel' /* UI.ViewManager.ViewLocationValues.PANEL */,
    id: 'data-track',
    title: () => 'Data Track',
    commandPrompt: () => '显示 Data Track 面板',
    order: 5,
    persistence: 'permanent' /* UI.ViewManager.ViewPersistence.PERMANENT */,
    async loadView() {
        const DataTrack = await loadDataTrackModule();
        return new DataTrack.DataTrackPane.DataTrackPaneImpl();
    },
});
