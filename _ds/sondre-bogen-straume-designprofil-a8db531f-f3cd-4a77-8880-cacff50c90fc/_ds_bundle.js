/* @ds-bundle: {"format":4,"namespace":"SondreBogenStraumeDesignprofil_a8db53","components":[{"name":"Callout","sourcePath":"components/document/Callout.jsx"},{"name":"ColoredBulletList","sourcePath":"components/document/ColoredBulletList.jsx"},{"name":"Divider","sourcePath":"components/document/Divider.jsx"},{"name":"EmailSignature","sourcePath":"components/document/EmailSignature.jsx"},{"name":"Heading","sourcePath":"components/document/Heading.jsx"},{"name":"Quote","sourcePath":"components/document/Quote.jsx"},{"name":"Signature","sourcePath":"components/document/Signature.jsx"}],"sourceHashes":{"components/document/Callout.jsx":"b153dc3deda5","components/document/ColoredBulletList.jsx":"ff6af647f94d","components/document/Divider.jsx":"0c07ac058412","components/document/EmailSignature.jsx":"0681ae8d5442","components/document/Heading.jsx":"b4dd9010dfa5","components/document/Quote.jsx":"024ddea21aeb","components/document/Signature.jsx":"49424dd3e7a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SondreBogenStraumeDesignprofil_a8db53 = window.SondreBogenStraumeDesignprofil_a8db53 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/document/Callout.jsx
try { (() => {
function Callout({
  kind = 'info',
  children
}) {
  const isWarn = kind === 'warning';
  return React.createElement('div', {
    style: {
      background: 'var(--surface-callout)',
      borderLeft: '3px solid var(--border-callout)',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-body)',
      margin: '8px 0'
    }
  }, React.createElement('strong', {
    style: {
      color: 'var(--color-heading)',
      fontFamily: 'var(--font-heading)'
    }
  }, isWarn ? 'Advarsel: ' : 'Informasjon: '), children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Callout.jsx", error: String((e && e.message) || e) }); }

// components/document/ColoredBulletList.jsx
try { (() => {
const COLORS = ['var(--color-violet-dark)', 'var(--color-pink-dark)', 'var(--color-cyan-dark)', 'var(--color-blue-dark)', 'var(--color-yellow-dark)'];
function ColoredBulletList({
  items
}) {
  return React.createElement('ul', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-body)'
    }
  }, items.map((item, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      margin: '4px 0'
    }
  }, React.createElement('span', {
    style: {
      color: COLORS[i % COLORS.length],
      fontSize: '1.2em',
      lineHeight: 1
    }
  }, '●'), React.createElement('span', null, item))));
}
Object.assign(__ds_scope, { ColoredBulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ColoredBulletList.jsx", error: String((e && e.message) || e) }); }

// components/document/Divider.jsx
try { (() => {
function Divider({
  weight = 'thin'
}) {
  return React.createElement('div', {
    style: {
      borderTop: (weight === 'thick' ? '2px' : '1px') + ' solid var(--color-primary)',
      margin: '16px 0'
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Divider.jsx", error: String((e && e.message) || e) }); }

// components/document/EmailSignature.jsx
try { (() => {
function EmailSignature({
  name,
  address,
  phone,
  email,
  web
}) {
  const row = {
    fontFamily: 'var(--font-body)',
    fontSize: '9pt',
    color: 'var(--color-body)'
  };
  return React.createElement('div', {
    style: {
      ...row,
      lineHeight: 1.6
    }
  }, React.createElement('div', null, 'Med hilsen'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--color-heading)',
      fontWeight: 700,
      marginTop: '6px'
    }
  }, name), React.createElement('div', null, address), React.createElement('div', null, 'Tlf: ', phone, ' | E-post: ', email), web && React.createElement('div', null, 'Web: ', web));
}
Object.assign(__ds_scope, { EmailSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/EmailSignature.jsx", error: String((e && e.message) || e) }); }

// components/document/Heading.jsx
try { (() => {
function Heading({
  level = 1,
  children
}) {
  const sizes = {
    1: 'var(--text-h1)',
    2: 'var(--text-h2)',
    3: 'var(--text-h3)'
  };
  const italic = level >= 3;
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--color-heading)',
      fontSize: sizes[level] || sizes[3],
      fontStyle: italic ? 'italic' : 'normal',
      lineHeight: 'var(--leading-heading)',
      margin: '0 0 8px'
    }
  }, children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Heading.jsx", error: String((e && e.message) || e) }); }

// components/document/Quote.jsx
try { (() => {
function Quote({
  strong = false,
  children,
  cite
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--color-heading)',
      fontSize: strong ? 'var(--text-h3)' : 'var(--text-body)',
      margin: '10px 0',
      paddingLeft: '16px'
    }
  }, React.createElement('div', null, '«', children, '»'), cite && React.createElement('div', {
    style: {
      marginTop: '4px',
      fontSize: 'var(--text-small)'
    }
  }, '– ', cite));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Quote.jsx", error: String((e && e.message) || e) }); }

// components/document/Signature.jsx
try { (() => {
function Signature({
  name,
  title
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-body)'
    }
  }, React.createElement('div', null, 'Med hilsen'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--color-heading)',
      fontWeight: 700,
      marginTop: '20px'
    }
  }, name), title && React.createElement('div', null, title));
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Signature.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ColoredBulletList = __ds_scope.ColoredBulletList;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.EmailSignature = __ds_scope.EmailSignature;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Signature = __ds_scope.Signature;

})();
