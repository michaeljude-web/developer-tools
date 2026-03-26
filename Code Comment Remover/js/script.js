 
  const LANGUAGES = [
    {
      id: 'javascript',
      label: 'JavaScript',
      icon: 'fa-brands fa-js',
      extensions: ['.js', '.jsx', '.mjs', '.cjs'],
      keywords: ['const ', 'let ', 'var ', 'function ', 'async ', 'await ', '=>', 'console.log', 'document.', 'window.', 'import ', 'export ', 'require('],
      type: 'c-style'
    },
    {
      id: 'typescript',
      label: 'TypeScript',
      icon: 'fa-solid fa-t',
      extensions: ['.ts', '.tsx'],
      keywords: ['interface ', 'type ', ': string', ': number', ': boolean', '<T>', 'readonly ', 'enum ', 'namespace '],
      type: 'c-style'
    },
    {
      id: 'php',
      label: 'PHP',
      icon: 'fa-brands fa-php',
      extensions: ['.php'],
      keywords: ['<?php', '<?=', 'echo ', '$', '->', '::', 'namespace ', 'use ', 'function ', 'class ', 'public ', 'private ', 'protected '],
      type: 'c-style'
    },
    {
      id: 'python',
      label: 'Python',
      icon: 'fa-brands fa-python',
      extensions: ['.py'],
      keywords: ['def ', 'import ', 'from ', 'class ', 'elif ', 'print(', 'self.', '__init__', 'lambda ', 'yield ', 'with ', 'raise '],
      type: 'python'
    },
    {
      id: 'java',
      label: 'Java',
      icon: 'fa-brands fa-java',
      extensions: ['.java'],
      keywords: ['public class', 'private ', 'protected ', 'static ', 'void ', 'System.out', 'new ', 'extends ', 'implements ', '@Override', 'throws '],
      type: 'c-style'
    },
    {
      id: 'c',
      label: 'C / C++',
      icon: 'fa-solid fa-c',
      extensions: ['.c', '.cpp', '.cc', '.h', '.hpp'],
      keywords: ['#include', '#define', 'printf(', 'scanf(', 'int main', 'std::', 'cout <<', 'cin >>', 'nullptr', 'void ', 'struct '],
      type: 'c-style'
    },
    {
      id: 'csharp',
      label: 'C#',
      icon: 'fa-solid fa-hashtag',
      extensions: ['.cs'],
      keywords: ['using ', 'namespace ', 'class ', 'public ', 'private ', 'Console.', 'static ', 'void ', 'async Task', 'await ', 'var '],
      type: 'c-style'
    },
    {
      id: 'css',
      label: 'CSS / SCSS',
      icon: 'fa-brands fa-css3-alt',
      extensions: ['.css', '.scss', '.sass', '.less'],
      keywords: ['{', '}', ':', ';', '.', '#', '@media', '@keyframes', 'px', 'rem', 'em', '%', 'var(--'],
      type: 'css'
    },
    {
      id: 'html',
      label: 'HTML',
      icon: 'fa-brands fa-html5',
      extensions: ['.html', '.htm'],
      keywords: ['<!DOCTYPE', '<html', '<head', '<body', '<div', '<span', '<p>', '<a ', '<script', '<style', '</'],
      type: 'html'
    },
    {
      id: 'ruby',
      label: 'Ruby',
      icon: 'fa-solid fa-gem',
      extensions: ['.rb'],
      keywords: ['def ', 'end', 'puts ', 'require ', 'class ', 'module ', 'do |', 'attr_', '.each', '.map', 'nil', 'elsif'],
      type: 'ruby'
    },
    {
      id: 'go',
      label: 'Go',
      icon: 'fa-solid fa-g',
      extensions: ['.go'],
      keywords: ['package ', 'import ', 'func ', 'fmt.', ':=', 'var ', 'type ', 'struct ', 'interface ', 'chan ', 'goroutine', 'defer '],
      type: 'c-style'
    },
    {
      id: 'rust',
      label: 'Rust',
      icon: 'fa-solid fa-r',
      extensions: ['.rs'],
      keywords: ['fn ', 'let ', 'mut ', 'use ', 'mod ', 'pub ', 'impl ', 'struct ', 'enum ', 'match ', 'Some(', 'None', '&str', 'Vec<'],
      type: 'c-style'
    },
    {
      id: 'swift',
      label: 'Swift',
      icon: 'fa-brands fa-swift',
      extensions: ['.swift'],
      keywords: ['var ', 'let ', 'func ', 'class ', 'struct ', 'import ', 'guard ', 'if let', 'print(', 'override ', 'UIViewController', 'SwiftUI'],
      type: 'c-style'
    },
    {
      id: 'kotlin',
      label: 'Kotlin',
      icon: 'fa-solid fa-k',
      extensions: ['.kt', '.kts'],
      keywords: ['fun ', 'val ', 'var ', 'class ', 'object ', 'when ', 'println(', 'data class', 'suspend ', 'companion ', 'override '],
      type: 'c-style'
    },
    {
      id: 'sql',
      label: 'SQL',
      icon: 'fa-solid fa-database',
      extensions: ['.sql'],
      keywords: ['SELECT ', 'FROM ', 'WHERE ', 'INSERT ', 'UPDATE ', 'DELETE ', 'CREATE ', 'DROP ', 'JOIN ', 'ORDER BY', 'GROUP BY', 'HAVING'],
      type: 'sql'
    },
    {
      id: 'bash',
      label: 'Bash / Shell',
      icon: 'fa-solid fa-terminal',
      extensions: ['.sh', '.bash', '.zsh'],
      keywords: ['#!/', 'echo ', 'if [', 'fi', 'for ', 'do\n', 'done', 'export ', '$(', '&&', '||', 'chmod ', 'grep '],
      type: 'bash'
    },
    {
      id: 'lua',
      label: 'Lua',
      icon: 'fa-solid fa-moon',
      extensions: ['.lua'],
      keywords: ['local ', 'function ', 'end', 'then', 'elseif', 'require(', 'print(', 'table.', 'string.', 'math.', 'io.'],
      type: 'lua'
    },
    {
      id: 'perl',
      label: 'Perl',
      icon: 'fa-solid fa-p',
      extensions: ['.pl', '.pm'],
      keywords: ['#!/usr/bin/perl', 'use strict', 'use warnings', 'my $', 'print ', 'sub ', 'foreach ', '@_', '%hash', 'chomp(', 'push('],
      type: 'perl'
    }
  ];

  
  function detectLanguage(code) {
    if (!code.trim()) return null;
    const scores = {};
    for (const lang of LANGUAGES) {
      let score = 0;
      for (const kw of lang.keywords) {
        if (code.includes(kw)) score++;
      }
      if (score > 0) scores[lang.id] = score;
    }
    if (!Object.keys(scores).length) return null;
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    return LANGUAGES.find(l => l.id === best[0]) || null;
  }

  
  const removalStrategies = {
    'c-style': removeCStyle,
    'python':  removePython,
    'html':    removeHTML,
    'css':     removeCStyle,
    'ruby':    removeRuby,
    'bash':    removeBash,
    'lua':     removeLua,
    'sql':     removeSQL,
    'perl':    removePerl
  };

  function removeCStyle(code) {
    let result = '';
    let i = 0;
    let removed = 0;

    while (i < code.length) {
      if (code[i] === '/' && code[i + 1] === '/') {
        const start = i;
        while (i < code.length && code[i] !== '\n') i++;
        removed++;
        continue;
      }

      if (code[i] === '/' && code[i + 1] === '*') {
        i += 2;
        while (i < code.length && !(code[i] === '*' && code[i + 1] === '/')) i++;
        i += 2;
        removed++;
        continue;
      }

      if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
        const quote = code[i];
        result += code[i++];
        while (i < code.length) {
          if (code[i] === '\\') { result += code[i++]; result += code[i++]; continue; }
          result += code[i];
          if (code[i++] === quote) break;
        }
        continue;
      }

      result += code[i++];
    }

    return { code: result, removed };
  }

  function removePython(code) {
    const lines = code.split('\n');
    let removed = 0;
    const output = [];
    let inMultiline = false;
    let multilineChar = '';

    for (let line of lines) {
      if (inMultiline) {
        if (line.includes(multilineChar)) {
          inMultiline = false;
          removed++;
        }
        continue;
      }

      const tripleDouble = line.indexOf('"""');
      const tripleSingle = line.indexOf("'''");
      let tripleIdx = -1;
      let tripleChar = '';

      if (tripleDouble !== -1 && (tripleSingle === -1 || tripleDouble < tripleSingle)) {
        tripleIdx = tripleDouble; tripleChar = '"""';
      } else if (tripleSingle !== -1) {
        tripleIdx = tripleSingle; tripleChar = "'''";
      }

      if (tripleIdx !== -1) {
        const closeIdx = line.indexOf(tripleChar, tripleIdx + 3);
        if (closeIdx === -1) { inMultiline = true; multilineChar = tripleChar; removed++; continue; }
        const before = line.slice(0, tripleIdx);
        const after  = line.slice(closeIdx + 3);
        line = before + after;
        removed++;
      }

      const commentIdx = findPythonInlineComment(line);
      if (commentIdx !== -1) {
        removed++;
        line = line.slice(0, commentIdx).trimEnd();
      }

      output.push(line);
    }

    return { code: output.join('\n'), removed };
  }

  function findPythonInlineComment(line) {
    let inStr = false;
    let strChar = '';
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inStr) {
        if (ch === '\\') { i++; continue; }
        if (ch === strChar) inStr = false;
      } else {
        if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
        else if (ch === '#') return i;
      }
    }
    return -1;
  }

  function removeHTML(code) {
    let removed = 0;
    const result = code.replace(/<!--[\s\S]*?-->/g, () => { removed++; return ''; });
    return { code: result, removed };
  }

  function removeRuby(code) {
    const lines = code.split('\n');
    let removed = 0;
    const output = [];
    let inBlock = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === '=begin') { inBlock = true; removed++; continue; }
      if (trimmed === '=end')   { inBlock = false; removed++; continue; }
      if (inBlock) { removed++; continue; }

      const idx = findRubyComment(line);
      if (idx !== -1) {
        removed++;
        output.push(line.slice(0, idx).trimEnd());
      } else {
        output.push(line);
      }
    }

    return { code: output.join('\n'), removed };
  }

  function findRubyComment(line) {
    let inStr = false;
    let strChar = '';
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inStr) {
        if (ch === '\\') { i++; continue; }
        if (ch === strChar) inStr = false;
      } else {
        if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
        else if (ch === '#') return i;
      }
    }
    return -1;
  }

  function removeBash(code) {
    const lines = code.split('\n');
    let removed = 0;
    const output = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === 0 && line.startsWith('#!')) { output.push(line); continue; }

      const idx = findBashComment(line);
      if (idx !== -1) {
        removed++;
        const cleaned = line.slice(0, idx).trimEnd();
        if (cleaned) output.push(cleaned);
      } else {
        output.push(line);
      }
    }

    return { code: output.join('\n'), removed };
  }

  function findBashComment(line) {
    let inStr = false;
    let strChar = '';
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inStr) {
        if (ch === '\\') { i++; continue; }
        if (ch === strChar) inStr = false;
      } else {
        if (ch === '"' || ch === "'") { inStr = true; strChar = ch; }
        else if (ch === '#') return i;
      }
    }
    return -1;
  }

  function removeLua(code) {
    let result = code.replace(/--\[\[[\s\S]*?\]\]/g, () => '');
    let removed = (code.match(/--\[\[[\s\S]*?\]\]/g) || []).length;

    const lines = result.split('\n');
    const output = [];
    for (const line of lines) {
      const idx = line.indexOf('--');
      if (idx !== -1) {
        removed++;
        output.push(line.slice(0, idx).trimEnd());
      } else {
        output.push(line);
      }
    }
    return { code: output.join('\n'), removed };
  }

  function removeSQL(code) {
    let result = '';
    const lines = code.split('\n');
    let removed = 0;
    let inBlock = false;

    for (const line of lines) {
      if (inBlock) {
        const endIdx = line.indexOf('*/');
        if (endIdx !== -1) { inBlock = false; result += line.slice(endIdx + 2) + '\n'; }
        continue;
      }

      const blockStart = line.indexOf('/*');
      const lineComment = line.indexOf('--');

      if (blockStart !== -1 && (lineComment === -1 || blockStart < lineComment)) {
        const blockEnd = line.indexOf('*/', blockStart + 2);
        if (blockEnd !== -1) {
          result += line.slice(0, blockStart) + line.slice(blockEnd + 2) + '\n';
        } else {
          result += line.slice(0, blockStart) + '\n';
          inBlock = true;
        }
        removed++;
        continue;
      }

      if (lineComment !== -1) {
        removed++;
        result += line.slice(0, lineComment).trimEnd() + '\n';
      } else {
        result += line + '\n';
      }
    }

    return { code: result, removed };
  }

  function removePerl(code) {
    const lines = code.split('\n');
    let removed = 0;
    const output = [];
    let inPod = false;

    for (const line of lines) {
      if (/^=\w+/.test(line)) { inPod = true;  removed++; continue; }
      if (line.trim() === '=cut') { inPod = false; removed++; continue; }
      if (inPod) { removed++; continue; }

      const idx = line.indexOf('#');
      if (idx !== -1) {
        removed++;
        output.push(line.slice(0, idx).trimEnd());
      } else {
        output.push(line);
      }
    }

    return { code: output.join('\n'), removed };
  }

  
  function cleanupBlankLines(code) {
    return code
      .replace(/\n{3,}/g, '\n\n')
      .replace(/^(\s*\n)+/, '')
      .trimEnd();
  }

  
  let currentLang    = null;
  let lastOutput     = '';
  let removedCount   = 0;

  
  function buildLangBar() {
    const bar = document.getElementById('lang-bar');
    for (const lang of LANGUAGES) {
      const pill = document.createElement('button');
      pill.className = 'lang-pill';
      pill.dataset.id = lang.id;
      pill.innerHTML = `<i class="${lang.icon}"></i> ${lang.label}`;
      pill.addEventListener('click', () => {
        currentLang = lang;
        updateDetectedBadge(lang, true);
        document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
      bar.appendChild(pill);
    }
  }

  
  function onInputChange() {
    const code = document.getElementById('input-code').value;
    const lines = code ? code.split('\n').length : 0;
    document.getElementById('input-lines').textContent = lines + ' line' + (lines !== 1 ? 's' : '');

    if (!currentLang || !document.querySelector('.lang-pill.active[data-id="' + currentLang.id + '"]')) {
      const detected = detectLanguage(code);
      currentLang = detected;
      updateDetectedBadge(detected, false);
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
      if (detected) {
        const pill = document.querySelector(`.lang-pill[data-id="${detected.id}"]`);
        if (pill) pill.classList.add('active');
      }
    }
  }

  function updateDetectedBadge(lang, manual) {
    const badge = document.getElementById('detected-badge');
    const label = document.getElementById('detected-label');
    if (lang) {
      badge.className = 'detected-badge has-lang';
      label.textContent = lang.label + (manual ? ' (manual)' : ' detected');
    } else {
      badge.className = 'detected-badge';
      label.textContent = 'No language detected';
    }
  }

  
  function removeComments() {
    const code = document.getElementById('input-code').value;
    if (!code.trim()) { showToast('Paste some code first!', true); return; }

    const lang = currentLang || detectLanguage(code);
    if (!lang) { showToast('Could not detect language. Select one manually.', true); return; }

    const strategy = removalStrategies[lang.type];
    if (!strategy) { showToast('Language not fully supported yet.', true); return; }

    const { code: cleaned, removed } = strategy(code);
    const final = cleanupBlankLines(cleaned);

    lastOutput   = final;
    removedCount = removed;

    const outputEl = document.getElementById('output-display');
    outputEl.className = 'output-display';
    outputEl.textContent = final;

    const outLines = final.split('\n').length;
    document.getElementById('output-lines').textContent = outLines + ' line' + (outLines !== 1 ? 's' : '');

    const chip = document.getElementById('removed-chip');
    chip.textContent = removed + ' comment' + (removed !== 1 ? 's' : '') + ' removed';
    chip.className = removed > 0 ? 'stat-chip has-removed' : 'stat-chip';

    showToast(removed > 0 ? `${removed} comment${removed !== 1 ? 's' : ''} removed successfully!` : 'No comments found.');
  }

  
  function copyOutput() {
    if (!lastOutput) { showToast('Nothing to copy yet.', true); return; }
    navigator.clipboard.writeText(lastOutput).then(() => {
      const lbl = document.getElementById('copy-lbl');
      lbl.textContent = 'Copied!';
      setTimeout(() => { lbl.textContent = 'Copy'; }, 1800);
      showToast('Copied to clipboard!');
    });
  }

  function downloadOutput() {
    if (!lastOutput) { showToast('Nothing to download yet.', true); return; }
    const ext  = currentLang?.extensions[0] || '.txt';
    const name = 'cleaned' + ext;
    const blob = new Blob([lastOutput], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded as ' + name);
  }

  function clearAll() {
    document.getElementById('input-code').value = '';
    const outputEl = document.getElementById('output-display');
    outputEl.className = 'output-display empty';
    outputEl.textContent = 'Output will appear here after removing comments.';
    document.getElementById('input-lines').textContent = '0 lines';
    document.getElementById('output-lines').textContent = '—';
    document.getElementById('removed-chip').textContent = '0 comments removed';
    document.getElementById('removed-chip').className = 'stat-chip';
    document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
    currentLang = null; lastOutput = ''; removedCount = 0;
    updateDetectedBadge(null, false);
  }

  
  const inputBody = document.getElementById('input-body');

  inputBody.addEventListener('dragover', (e) => { e.preventDefault(); inputBody.classList.add('dragging'); });
  inputBody.addEventListener('dragleave', () => { inputBody.classList.remove('dragging'); });
  inputBody.addEventListener('drop', (e) => {
    e.preventDefault();
    inputBody.classList.remove('dragging');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.getElementById('input-code').value = ev.target.result;
      onInputChange();
      showToast('File loaded: ' + file.name);
    };
    reader.readAsText(file);
  });

  
  let toastTimer = null;
  function showToast(msg, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const icon = toast.querySelector('i');
    toastMsg.textContent = msg;
    icon.className = isError ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-check-circle';
    icon.style.color = isError ? 'var(--red)' : 'var(--green)';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 2800);
  }

  
  buildLangBar();