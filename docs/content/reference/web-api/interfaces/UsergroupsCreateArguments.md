[@slack/web-api](../index.md) / UsergroupsCreateArguments

# Interface: UsergroupsCreateArguments

Defined in: [src/types/request/usergroups.ts:10](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L10)

## Extends

- `TokenOverridable`.`OptionalTeamAssignable`.`UsergroupsIncludeCount`

## Properties

### channels?

```ts
optional channels: string;
```

Defined in: [src/types/request/usergroups.ts:14](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L14)

#### Description

A comma separated string of encoded channel IDs for which the User Group uses as a default.

***

### description?

```ts
optional description: string;
```

Defined in: [src/types/request/usergroups.ts:16](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L16)

#### Description

A short description of the User Group.

***

### handle?

```ts
optional handle: string;
```

Defined in: [src/types/request/usergroups.ts:18](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L18)

#### Description

A mention handle. Must be unique among channels, users and User Groups.

***

### include\_count?

```ts
optional include_count: boolean;
```

Defined in: [src/types/request/usergroups.ts:6](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L6)

#### Description

Include the number of users in each User Group.

#### Inherited from

```ts
UsergroupsIncludeCount.include_count
```

***

### name

```ts
name: string;
```

Defined in: [src/types/request/usergroups.ts:12](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/usergroups.ts#L12)

#### Description

A name for the User Group. Must be unique among User Groups.

***

### team\_id?

```ts
optional team_id: string;
```

Defined in: [src/types/request/common.ts:70](https://github.com/slackapi/node-slack-sdk/blob/main/packages/web-api/src/types/request/common.ts#L70)

#### Description

If using an org token, `team_id` is required.

#### Inherited from

```ts
OptionalTeamAssignable.team_id
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
