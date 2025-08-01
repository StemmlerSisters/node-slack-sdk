[@slack/web-api](../index.md) / CanvasesAccessSetArguments

# Interface: CanvasesAccessSetArguments

Defined in: [src/types/request/canvas.ts:61](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/canvas.ts#L61)

## Extends

- `CanvasID`.`Partial`\<`ChannelIDs`\>.`TokenOverridable`.`Partial`\<`UserIDs`\>

## Properties

### access\_level

```ts
access_level: "read" | "write";
```

Defined in: [src/types/request/canvas.ts:63](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/canvas.ts#L63)

#### Description

Desired level of access.

***

### canvas\_id

```ts
canvas_id: string;
```

Defined in: [src/types/request/canvas.ts:6](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/canvas.ts#L6)

#### Description

Encoded ID of the canvas.

#### Inherited from

```ts
CanvasID.canvas_id
```

***

### channel\_ids?

```ts
optional channel_ids: [string, ...string[]];
```

Defined in: [src/types/request/common.ts:81](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/common.ts#L81)

#### Description

An array of channel IDs (must include at least one ID).

#### Inherited from

```ts
Partial.channel_ids
```

***

### token?

```ts
optional token: string;
```

Defined in: [src/types/request/common.ts:43](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/common.ts#L43)

#### Description

Overridable authentication token bearing required scopes.

#### Inherited from

```ts
TokenOverridable.token
```

***

### user\_ids?

```ts
optional user_ids: [string, ...string[]];
```

Defined in: [src/types/request/common.ts:92](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/common.ts#L92)

#### Description

List of encoded user IDs.

#### Inherited from

```ts
Partial.user_ids
```
