import { AddressListItem } from '../components/AddressListItem';
import { ExtraListItem } from '../components/ExtraListItem';
import { List, TonIcon, copyText } from '@tonkeeper/uikit';
import { ActionModalContent } from '../ActionModalContent';
import { t } from '../../../i18n';
import { EncryptedComment, EncryptedCommentLayout } from '../../../components';
import {
  ActionItem,
  ActionType,
} from '@tonkeeper/mobile/src/wallet/models/ActivityModel';

interface TonTransferActionContentProps {
  action: ActionItem<ActionType.TonTransfer>;
  isInLocalScam?: boolean;
}

export const TonTransferActionContent = (props: TonTransferActionContentProps) => {
  const { action, isInLocalScam } = props;

  return (
    <ActionModalContent
      isInLocalScam={isInLocalScam}
      header={<TonIcon size="large" />}
      action={action}
    >
      <List>
        <AddressListItem
          recipient={action.payload.recipient}
          destination={action.destination}
          hideName={action.event.is_scam}
          sender={action.payload.sender}
          bounceable={action.initialActionType === ActionType.SmartContractExec}
        />
        <ExtraListItem extra={action.event.extra} />
        {action.payload?.encrypted_comment && !action.event.is_scam && !isInLocalScam && (
          <EncryptedComment
            layout={EncryptedCommentLayout.LIST_ITEM}
            encryptedComment={action.payload.encrypted_comment}
            actionId={action.action_id}
            sender={action.payload.sender}
          />
        )}
        {!!action.payload.comment && !action.event.is_scam && !isInLocalScam && (
          <List.Item
            titleType="secondary"
            title={t('transactionDetails.comment')}
            onPress={copyText(action.payload.comment)}
            value={action.payload.comment}
            valueMultiline
          />
        )}
      </List>
    </ActionModalContent>
  );
};
