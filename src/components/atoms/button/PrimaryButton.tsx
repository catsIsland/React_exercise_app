import { Button, Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Flex align="center" justify="center">
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        w={100}
        isLoading={loading}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </Flex>
  );
});
