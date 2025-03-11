frappe.ui.form.on('Employee', {
    custom_salary: function(frm) {
        if (frm.doc.custom_salary) {
            frm.set_value('custom_double_salary', frm.doc.custom_salary * 3);
            frm.refresh_field('custom_double_salary');
        }
    }
});
