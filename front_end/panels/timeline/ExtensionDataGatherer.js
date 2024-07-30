// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Root from '../../core/root/root.js';
import { TimelinePanel } from './TimelinePanel.js';
let extensionDataGathererInstance;
/**
 * This class abstracts the source of extension data out by providing a
 * single access point to the performance panel for extension data.
 */
export class ExtensionDataGatherer {
    #traceParsedData = null;
    #extensionDataByModel = new Map();
    static instance() {
        if (extensionDataGathererInstance) {
            return extensionDataGathererInstance;
        }
        extensionDataGathererInstance = new ExtensionDataGatherer();
        return extensionDataGathererInstance;
    }
    static removeInstance() {
        extensionDataGathererInstance = undefined;
    }
    /**
     * Gets the data provided by extensions.
     */
    getExtensionData() {
        const extensionDataEnabled = TimelinePanel.extensionDataVisibilitySetting().get() &&
            Root.Runtime.experiments.isEnabled("timeline-extensions" /* Root.Runtime.ExperimentName.TIMELINE_EXTENSIONS */);
        if (!extensionDataEnabled || !this.#traceParsedData || !this.#traceParsedData.ExtensionTraceData) {
            return { extensionMarkers: [], extensionTrackData: [] };
        }
        const maybeCachedData = this.#extensionDataByModel.get(this.#traceParsedData);
        if (maybeCachedData) {
            return maybeCachedData;
        }
        return this.#traceParsedData.ExtensionTraceData;
    }
    saveCurrentModelData() {
        if (this.#traceParsedData && !this.#extensionDataByModel.has(this.#traceParsedData)) {
            this.#extensionDataByModel.set(this.#traceParsedData, this.getExtensionData());
        }
    }
    modelChanged(traceParsedData) {
        if (traceParsedData === this.#traceParsedData) {
            return;
        }
        if (this.#traceParsedData !== null) {
            // DevTools extension data is assumed to be useful only for the current
            // trace data (model). As such, if the model changes, we cache the devtools
            // extension data we have collected for the previous model and listen
            // for new data that applies to the new model.
            this.saveCurrentModelData();
        }
        this.#traceParsedData = traceParsedData;
    }
}
//# sourceMappingURL=ExtensionDataGatherer.js.map