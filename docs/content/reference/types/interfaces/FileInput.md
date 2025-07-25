[@slack/types](../index.md) / FileInput

# Interface: FileInput

Defined in: [block-kit/block-elements.ts:146](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L146)

## Description

Allows user to upload files. In order to use the `file_input` element within your app,
your app must have the `files:read` scope.

## See

[File input element reference](https://docs.slack.dev/reference/block-kit/block-elements/file-input-element).

## Extends

- [`Actionable`](Actionable.md)

## Properties

### action\_id?

```ts
optional action_id: string;
```

Defined in: [block-kit/extensions.ts:15](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/extensions.ts#L15)

@description: An identifier for this action. You can use this when you receive an interaction payload to
[identify the source of the action](https://docs.slack.dev/interactivity/handling-user-interaction#payloads). Should be unique
among all other `action_id`s in the containing block. Maximum length for this field is 255 characters.

#### Inherited from

[`Actionable`](Actionable.md).[`action_id`](Actionable.md#action_id)

***

### filetypes?

```ts
optional filetypes: string[];
```

Defined in: [block-kit/block-elements.ts:156](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L156)

#### Description

An array of valid [file extensions](https://docs.slack.dev/reference/objects/file-object) that will be accepted
for this element. All file extensions will be accepted if `filetypes` is not specified. This validation is provided
for convenience only, and you should perform your own file type validation based on what you expect to receive.

***

### max\_files?

```ts
optional max_files: number;
```

Defined in: [block-kit/block-elements.ts:161](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L161)

#### Description

Maximum number of files that can be uploaded for this `file_input` element. Minimum of `1`, maximum of
`10`. Defaults to `10` if not specified.

***

### type

```ts
type: "file_input";
```

Defined in: [block-kit/block-elements.ts:150](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L150)

#### Description

The type of element. In this case `type` is always `file_input`.

#### Overrides

[`Actionable`](Actionable.md).[`type`](Actionable.md#type)
