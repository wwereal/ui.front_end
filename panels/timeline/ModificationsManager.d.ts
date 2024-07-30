import * as TraceEngine from '../../models/trace/trace.js';
import * as TimelineComponents from '../../panels/timeline/components/components.js';
import { type TimelineOverlay } from './Overlays.js';
export type UpdateAction = 'Remove' | 'Add' | 'UpdateLabel';
export declare class AnnotationModifiedEvent extends Event {
    overlay: TimelineOverlay;
    action: UpdateAction;
    static readonly eventName = "annotationmodifiedevent";
    constructor(overlay: TimelineOverlay, action: UpdateAction);
}
export declare class ModificationsManager extends EventTarget {
    #private;
    /**
     * Gets the ModificationsManager instance corresponding to a trace
     * given its index used in Model#traces. If no index is passed gets
     * the manager instance for the last trace. If no instance is found,
     * throws.
     */
    static activeManager(): ModificationsManager | null;
    /**
     * Initializes a ModificationsManager instance for a parsed trace or changes the active manager for an existing one.
     * This needs to be called if and a trace has been parsed or switched to.
     */
    static initAndActivateModificationsManager(traceModel: TraceEngine.TraceModel.Model, traceIndex: number): ModificationsManager | null;
    private constructor();
    getEntriesFilter(): TraceEngine.EntriesFilter.EntriesFilter;
    getTimelineBreadcrumbs(): TimelineComponents.Breadcrumbs.Breadcrumbs;
    createAnnotation(newAnnotation: TraceEngine.Types.File.Annotation): void;
    removeAnnotation(removedAnnotation: TraceEngine.Types.File.Annotation): void;
    removeAnnotationOverlay(removedOverlay: TimelineOverlay): void;
    updateAnnotationOverlay(updatedOverlay: TimelineOverlay): void;
    getAnnotations(): TraceEngine.Types.File.Annotation[];
    getOverlays(): TimelineOverlay[];
    /**
     * Builds all modifications into a serializable object written into
     * the 'modifications' trace file metadata field.
     */
    toJSON(): TraceEngine.Types.File.Modifications;
    applyModificationsIfPresent(): void;
}
