import React from 'react';

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  Center,
} from '../../../ui-components';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Center>
      <VStack space="md" w="$full">
        <Input {...props} size="sm">
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="md">
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="lg" isDisabled>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="xl" isInvalid>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>
      </VStack>
    </Center>
  );
};

export { InputStory, Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
