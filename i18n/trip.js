/* ترجمة إضافية لمسار الرحلة: نافذة رفع الروستر (المقارنة وآخر رفع واللصق) */
NWI18N.add({
  '📋 لصق من الحافظة': '📋 Paste from clipboard', 'مسح': 'Clear', '📋 نسخ عمودي الواجب والرحلة': '📋 Copy duty and trip columns', 'أو ارفع ملف بدل اللصق:': 'or upload a file instead:',
  '🔄 جاري المقارنة مع آخر رفع...': '🔄 Comparing with the last upload...', '⚠️ تعذّرت المقارنة مع آخر رفع': '⚠️ Could not compare with the last upload',
  'أول رفع لتاريخ': 'First upload for', 'ما في روستر قبله': 'no earlier roster', 'ما في أي تغيير': 'No changes', 'عن آخر رفع': 'from the last upload', 'فيه تغييرات': 'Changes',
  'رحلة تغيّر كابتنها': 'trip(s) with a changed captain', 'رحلة جديدة': 'new trip(s)', 'رحلة انشالت': 'trip(s) removed', 'التفاصيل': 'Details',
  '📌 جاري معرفة آخر روستر مرفوع...': '📌 Finding the last uploaded roster...', 'آخر روستر مرفوع:': 'Last uploaded roster:', 'لتاريخ': 'for', 'رحلة': 'trips', 'انرفع': 'uploaded',
  'بواسطة': 'by', '📌 ما لقيت روستر مرفوع خلال آخر 10 أيام': '📌 No roster uploaded in the last 10 days', 'تاريخ': 'Date', 'مرفوع له روستر قبل': 'already has a roster',
  'الحفظ بيستبدله': 'saving will replace it', 'ما انرفع له روستر للحين': 'has no roster yet', '📌 تعذّر معرفة آخر روستر مرفوع': '📌 Could not find the last uploaded roster',
  'المتصفح ما سمح بقراءة الحافظة — اضغط داخل المربع ثم Ctrl + V': "The browser didn't allow reading the clipboard — click inside the box then Ctrl + V",
  'الحافظة فاضية — ارجع للإكسل وحدد الخلايا واضغط Ctrl + C (مو زر النسخ في الشريط)، وبعدين اضغط هنا': 'The clipboard is empty — go back to Excel, select the cells and press Ctrl + C (not the ribbon copy button), then press here',
  'ما وصل شي من الحافظة — ارجع للإكسل وحدد الخلايا واضغط Ctrl + C (مو زر النسخ في الشريط) وبعدين الصق هنا': 'Nothing arrived from the clipboard — go back to Excel, select the cells and press Ctrl + C (not the ribbon copy button), then paste here',
  'المفروض': 'expected', 'صف (نفس عدد رحلات القالب)': 'rows (same as the template trips)', 'عدد الصفوف الملصوقة': 'Pasted rows'
}, [
  [/^(\d+) رحلة تغيّر كابتنها$/, '$1 trips with a changed captain'], [/(\d+) رحلة جديدة/g, '$1 new trips', 1], [/(\d+) رحلة انشالت/g, '$1 trips removed', 1], [/(\d+) رحلة تغيّر كابتنها/g, '$1 trips with a changed captain', 1], [/(^|[^ء-ي])(\d+) (رحلة|صف)(?=$|[^ء-ي])/g, function (m, p, n, w) { return p + n + (w === 'صف' ? ' rows' : ' trips'); }, 1]
]);
