# My Money: getting started

My Money is a household budget planned by payday. Every bill is placed on the paycheck
before it's due, so you can see what's left each week. It's free for personal use and runs
on Windows 10 and 11.

## Install

1. Download **My-Money_X.Y.Z_x64-setup.exe** from the
   [latest release](https://github.com/DangerPencil/my-money-releases/releases/latest).
2. Run it. Windows may show **"Windows protected your PC"**, because My Money is new and
   doesn't come from a big publisher. Click **More info**, then **Run anyway**. You only see
   this once.
3. Accept the license and finish the installer. My Money starts from the Start menu.

Want to be sure the file is the real one? Each release lists its SHA-256 in
`SHA256SUMS.txt`. In PowerShell, run `Get-FileHash .\My-Money_X.Y.Z_x64-setup.exe` and
check the two match.

Updates install themselves: when a new version is out, My Money offers it the next time it
starts. Updates are checked against a signature before they're installed.

## Set up your budget

Want to look around first? On the start screen, choose **Try the example budget**: a
made-up household with paychecks, bills and savings, kept apart from your own.

1. **Create a household.** Choose an empty folder for it. To use the budget on more than one
   PC, choose a folder in OneDrive, Dropbox or Google Drive.
2. **Choose a passphrase** (a few words you'll remember) and **print the recovery sheet**.
   If the passphrase is lost, nobody can open the budget, not even the app's author.
3. **Add yourself** (and anyone else who'll use it) with a PIN.
4. The setup wizard asks for your account's starting balance and your paychecks.
5. In the **Budget** tab, use **Add line item** for each bill, subscription and savings goal.

## Bring in your bank's transactions (optional)

On your bank's website, download your transactions as **QFX/OFX** (Quicken), **QBO**
(QuickBooks) or **CSV**, and upload the file in the **Bank** tab. Approve a payee rule, for
example NETFLIX → Netflix, and matching charges mark bills paid.

## Your phone (optional)

If the household is in OneDrive, Setup → Phone shows a QR code. Scan it to see your budget on
your phone (view only).

## Your data

Your budget is one encrypted file in the folder you chose. My Money has no account, no server
and no analytics. It contacts only GitHub, to check for updates. See Help → License &
privacy in the app.

## Problems?

Help → **Report a problem…** saves a text file describing what went wrong, with none of your
budget in it. Email it to **mymoney.supportdesk@gmail.com** with the file attached; you'll
get a ticket number back. Never send your passphrase, PIN or bank details: nobody needs them
to help you.

My Money isn't financial advice and comes with no warranty. See the license in the app.
