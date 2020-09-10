import { makeWebshell } from './make-webshell';
export type {
  AssembledEventFeature,
  AssembledFeature,
  AssembledFeatureOf,
  EventFeature,
  EventFeatureOf,
  EventHandlerDefinition,
  EventHandlerProps,
  EventNameOf,
  Feature,
  MinimalWebViewProps,
  RequiredIfObjectHasRequiredField as OptionalUnlessRequiredField,
  PayloadOf,
  WebjsContext,
  WebshellAssembledProps,
  WebshellComponentOf,
  WebshellInvariantProps,
  WebshellProps
} from './types';
export * from './features/types';
export * from './make-feature';
export * from './features';
export * from './hooks/autoheigh';
export { makeWebshell };
export default makeWebshell;
