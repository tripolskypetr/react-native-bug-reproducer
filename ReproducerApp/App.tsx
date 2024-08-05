//@ts-nocheck
import React from 'react';

import {ScrollView, Text, View, StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

export const WithBaseline = ({style, children}: any) => (
  <View style={[styles.withBaselineRoot, style]}>
    <View style={styles.withBaseline}>{children}</View>
    <View style={styles.adjust} />
  </View>
);

const NoBaseline = ({style, children}: any) => (
  <View style={[styles.noBaselineRoot, style]}>{children}</View>
);

const FieldWrapper = ({style, children}: any) => (
  <View style={[styles.fieldWrapperRoot, style]}>{children}</View>
);

export default function App() {
  return (
    <ScrollView>
      <NoBaseline>
        <FieldWrapper
          style={{width: '100%', height: 125, justifyContent: 'center'}}>
          <Text>Group 1</Text>
        </FieldWrapper>

        <WithBaseline style={{width: '100%'}}>
          <FieldWrapper style={{width: '25%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
          <FieldWrapper style={{width: '25%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
          <FieldWrapper style={{width: '25%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
          <FieldWrapper style={{width: '25%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
        </WithBaseline>
        <FieldWrapper
          style={{width: '100%', height: 125, justifyContent: 'center'}}>
          <Text>Group 2</Text>
        </FieldWrapper>
        <WithBaseline style={{width: '100%'}}>
          <FieldWrapper style={{width: '33%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
          <FieldWrapper style={{width: '33%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
          <FieldWrapper style={{width: '33%'}}>
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
            <TextInput label="Email" />
          </FieldWrapper>
        </WithBaseline>
      </NoBaseline>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  withBaselineRoot: {
    flexDirection: 'column',
  },
  noBaselineRoot: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fieldWrapperRoot: {
    flexDirection: 'column',
  },
  withBaseline: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  adjust: {
    width: '100%',
    flex: 1,
  },
});
