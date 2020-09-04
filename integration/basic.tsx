import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import makeWebshell, {
  handleLinkPressFeature,
  handleHTMLDimensionsFeature,
  HTMLDimensions,
  LinkPressTarget
} from '@formidable-webview/webshell';
import WebView, { WebViewProps } from 'react-native-webview';

const Webshell = makeWebshell(
  WebView,
  handleLinkPressFeature.assemble({ preventDefault: true }),
  handleHTMLDimensionsFeature.assemble()
);

export default function EnhancedWebView(webViewProps: WebViewProps) {
  const onLinkPress = useCallback((target: LinkPressTarget) => {
    Linking.canOpenURL(target.uri) && Linking.openURL(target.uri);
  }, []);
  const onBodyDimensions = useCallback(
    ({ content: { height } }: HTMLDimensions) =>
      console.info('Content has height of', height),
    []
  );
  const onError = useCallback((featureIdentifier, errorMessage) => {
    if (featureIdentifier === handleLinkPressFeature.featureIdentifier) {
      // Handle linkPress error
      console.error(errorMessage);
    } else if (
      featureIdentifier === handleHTMLDimensionsFeature.featureIdentifier
    ) {
      // Handle dimensions error
      console.error(errorMessage);
    }
  }, []);
  return (
    <Webshell
      onDOMLinkPress={onLinkPress}
      onDOMHTMLDimensions={onBodyDimensions}
      onDOMError={onError}
      {...webViewProps}
    />
  );
}
