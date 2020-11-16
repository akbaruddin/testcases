# Installation

## Required Tools

- NodeJS
- npm
- Code Editor(VS Code, Sublime)

## Steps

1. Check `node` and `npm`

```bash
node -v
# v14.15.1
npm -v
# 6.14.8
```

2. Create directory and Switch into directory

```bash
mkdir automationu

cd automationu
```

3. Create `package.json` file

```bash
npm init -y
```

4. Install `JEST`

```bash
npm i -D jest
```

5. Update `package.json` **test**

```javascript
{
  ....
  "scripts": {
    "test": "jest"
  }
  ....
}
```
