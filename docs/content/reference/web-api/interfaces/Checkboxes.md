[@slack/web-api](../index.md) / Checkboxes

# Interface: Checkboxes

Defined in: node\_modules/@slack/types/dist/block-kit/block-elements.d.ts:50

## Description

Allows users to choose multiple items from a list of options.

## See

 - [Checkboxes element reference](https://api.slack.com/reference/block-kit/block-elements#checkboxes).
 - [This is an interactive component - see our guide to enabling interactivity](https://api.slack.com/interactivity/handling).

## Extends

- [`Actionable`](Actionable.md).[`Confirmable`](Confirmable.md).[`Focusable`](Focusable.md)

## Properties

### action\_id?

```ts
optional action_id: string;
```

Defined in: node\_modules/@slack/types/dist/block-kit/extensions.d.ts:12

@description: An identifier for this action. You can use this when you receive an interaction payload to
[identify the source of the action](https://api.slack.com/interactivity/handling#payloads). Should be unique
among all other `action_id`s in the containing block. Maximum length for this field is 255 characters.

#### Inherited from

[`Actionable`](Actionable.md).[`action_id`](Actionable.md#action_id)

***

### confirm?

```ts
optional confirm: ConfirmationDialog;
```

Defined in: node\_modules/@slack/types/dist/block-kit/extensions.d.ts:21

#### Description

A [Confirm](Confirm.md) object that defines an optional confirmation dialog after the element is interacted
with.

#### Inherited from

[`Confirmable`](Confirmable.md).[`confirm`](Confirmable.md#confirm)

***

### focus\_on\_load?

```ts
optional focus_on_load: boolean;
```

Defined in: node\_modules/@slack/types/dist/block-kit/extensions.d.ts:36

#### Description

Indicates whether the element will be set to auto focus within the
[\`view\` object](https://api.slack.com/reference/surfaces/views). Only one element can be set to `true`.
Defaults to `false`.

#### Inherited from

[`Focusable`](Focusable.md).[`focus_on_load`](Focusable.md#focus_on_load)

***

### initial\_options?

```ts
optional initial_options: Option[];
```

Defined in: node\_modules/@slack/types/dist/block-kit/block-elements.d.ts:59

#### Description

An array of [Option](../type-aliases/Option.md) objects that exactly matches one or more of the options within `options`.
These options will be selected when the checkbox group initially loads.

***

### options

```ts
options: Option[];
```

Defined in: node\_modules/@slack/types/dist/block-kit/block-elements.d.ts:63

#### Description

An array of [Option](../type-aliases/Option.md) objects. A maximum of 10 options are allowed.

***

### type

```ts
type: "checkboxes";
```

Defined in: node\_modules/@slack/types/dist/block-kit/block-elements.d.ts:54

#### Description

The type of element. In this case `type` is always `checkboxes`.

#### Overrides

[`Actionable`](Actionable.md).[`type`](Actionable.md#type)
