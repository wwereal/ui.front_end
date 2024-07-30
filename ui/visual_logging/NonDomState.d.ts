import { type Loggable } from './Loggable.js';
import { type LoggingConfig } from './LoggingConfig.js';
interface LoggableRegistration {
    loggable: Loggable;
    config: LoggingConfig;
    parent?: Loggable;
}
export declare function registerLoggable(loggable: Loggable, config: LoggingConfig, parent?: Loggable): void;
export declare function getNonDomState(parent?: Loggable): {
    loggables: LoggableRegistration[];
};
export declare function unregisterLoggables(parent?: Loggable): void;
export declare function unregisterAllLoggables(): void;
export {};
