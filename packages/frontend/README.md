## Article management

## Running the app

```bash
# development
$ yarn run start

```

## Project structure

### Constants

```
--shared
---- const
------ example.const.ts

```

There is a place to store your constants. To create a new constant you should create a file inside a `const` folder with the following name `<file-name>.const.ts`.

### Utils

```
--shared
---- utils
------ example.util.ts

```

All helpers should be placed here. Do not create any helpers inside `modules` move them at global level

### Modules

```

-- modules
---- example-module
-------- components
-------- hooks
-------- utils
-------- types
-------- style

```

Modules is the core of application. Each feature should be created as a separate module (Example: `modules/users` or `modules/auth`).

### Hooks

```
--shared
---- hooks
------ example.hook.ts

```

Use hooks to incapsulate some logic related to component state, logic, rendering. If you want to create generic hook which will be used all around the app - place it in common module.

### Types

```
--shared
---- types
------ example.types.ts

```

In case if you have any shard `interfaces`, `types`, `enums` you should move it to `types` dir.

### Components

Components should consists from 2 main parts.

example.styled.tsx - all styles related to the component should be handled by that
example.component.tsx - component itself it imports styles and services from other modules

```
-- example
---- example.styled.tsx
---- example.component.tsx

```

## Development convention

### REST Api calls

To make a calls to external API or to backend API you should use `shared/services/http-factory.service.ts`. Use DI and classes composition in Featured service.

For non auth service use:

```

class ExampleHttpService {
    constructor(private httpService: IHttpClient) {}
}

const instance = new ExampleHttpService(new HttpFactory().createHttpService());

```

For auth service use:

```

class ExampleHttpService {
    constructor(private httpService: IHttpClient) {}
}

const instance = new ExampleHttpService(new HttpFactory().createAuthHttpService())

```

### React Query

## License

Nest is [MIT licensed](LICENSE).
