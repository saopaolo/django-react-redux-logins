from django.db import models
from accounts.models import UserAccount
from django.utils.timezone import now

# Create your models here.
# Application form
class ApplicationForm(models.Model):
    
    class OwnershipStatus(models.TextChoices):
        RENT = 'Rent'
        OWNED = 'Owned'
        
    class WithYou(models.TextChoices):
        YES = 'Yes'
        NO = 'No'
        
    class TravelPurpose(models.TextChoices):
        STUDY = 'Study'
        BUSINESS = 'Business'
        TOURISM = 'Tourism'
        MEDICAL = 'Medical'
    
    userAccount = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING, null=True, blank=True)
    email = models.CharField(max_length=50, blank=True)
    travel_purpose = models.CharField(max_length=50, choices=TravelPurpose.choices, default=TravelPurpose.STUDY)
    pasport_number = models.CharField(max_length=20, blank=False)
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    dob = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=150, blank=True)
    post_code = models.CharField(max_length=15, blank=True)
    residence_since = models.CharField(max_length=20, blank=True)
    address_ownership_status = models.CharField(max_length=50, choices=OwnershipStatus.choices, default=OwnershipStatus.RENT)
    address2 = models.CharField(max_length=150, blank=True)
    post_code2 = models.CharField(max_length=15, blank=True)
    address2_residence_since = models.CharField(max_length=20, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    passport_issue_date = models.DateField(null=True, blank=True)
    passport_expiry_date = models.DateField(null=True, blank=True)
    nationality = models.CharField(max_length=35, blank=True)
    destination_country = models.CharField(max_length=50, blank=True)
    passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    job_type = models.CharField(max_length=50, blank=True)
    job_title = models.CharField(max_length=30, blank=True)
    starting_date = models.DateField(null=True, blank=True)
    job_address = models.CharField(max_length=150, blank=True)
    job_post_code = models.CharField(max_length=15, blank=True)
    company_name = models.CharField(max_length=50, blank=True)
    company_phone = models.CharField(max_length=20, blank=True)
    yearly_salary = models.IntegerField(null=True, blank=True)
    monthly_salary = models.CharField(max_length=50, blank=True)
    
    
    arrive_date = models.DateField(null=True, blank=True)
    leave_date = models.DateField(null=True, blank=True)
    monthly_living_expenses = models.IntegerField(null=True, blank=True)
    trip_expenses = models.IntegerField(null=True, blank=True)
    purpose_of_trip = models.CharField(max_length=50, blank=True)
    
    spouse_first_name = models.CharField(max_length=50, blank=True)
    spouse_last_name = models.CharField(max_length=50, blank=True)
    spouse_dob = models.DateField(null=True, blank=True)
    spouse_job = models.CharField(max_length=50, blank=True)
    spouse_nationality = models.CharField(max_length=35, blank=True)
    spouse_live_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.YES)
    spouse_travel_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.NO)
    spouse_passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    father_first_name = models.CharField(max_length=50, blank=True)
    father_last_name = models.CharField(max_length=50, blank=True)
    father_dob = models.DateField(null=True, blank=True)
    father_nationality = models.CharField(max_length=35, blank=True)
    
    mother_first_name = models.CharField(max_length=50, blank=True)
    mother_last_name = models.CharField(max_length=50, blank=True)
    mother_dob = models.DateField(null=True, blank=True)
    mother_nationality = models.CharField(max_length=35, blank=True)
    
    inviter_first_name = models.CharField(max_length=50, blank=True)
    inviter_last_name = models.CharField(max_length=50, blank=True)
    inviter_email = models.EmailField(max_length=200, blank=True)
    inviter_address = models.CharField(max_length=150, blank=True)
    inviter_post_code = models.CharField(max_length=15, blank=True)
    
    child1_first_name = models.CharField(max_length=50, blank=True)
    child1_last_name = models.CharField(max_length=50, blank=True)
    child1_dob = models.DateField(null=True, blank=True)
    child1_address = models.CharField(max_length=150, blank=True)
    child1_live_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.YES)
    child1_travelling_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.NO)
    child1_nationality = models.CharField(max_length=35, blank=True)
    child1_passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    child2_first_name = models.CharField(max_length=50, blank=True)
    child2_last_name = models.CharField(max_length=50, blank=True)
    child2_dob = models.DateField(null=True, blank=True)
    child2_address = models.CharField(max_length=150, blank=True)
    child2_live_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.YES)
    child2_travelling_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.NO)
    child2_nationality = models.CharField(max_length=35, blank=True)
    child2_passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    child3_first_name = models.CharField(max_length=50, blank=True)
    child3_last_name = models.CharField(max_length=50, blank=True)
    child3_dob = models.DateField(null=True, blank=True)
    child3_address = models.CharField(max_length=150, blank=True)
    child3_live_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.YES)
    child3_travelling_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.NO)
    child3_nationality = models.CharField(max_length=35, blank=True)
    child3_passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    child4_first_name = models.CharField(max_length=50, blank=True)
    child4_last_name = models.CharField(max_length=50, blank=True)
    child4_dob = models.DateField(null=True, blank=True)
    child4_address = models.CharField(max_length=150, blank=True)
    child4_live_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.YES)
    child4_travelling_with_you = models.CharField(max_length=50, choices=WithYou.choices, default=WithYou.NO)
    child4_nationality = models.CharField(max_length=35, blank=True)
    child4_passport_photo = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    friend1_first_name = models.CharField(max_length=50, blank=True)
    friend1_last_name = models.CharField(max_length=50, blank=True)
    friend1_nationality = models.CharField(max_length=35, blank=True)
    friend1_relationship = models.CharField(max_length=50, blank=True)
    friend1_passport_no = models.CharField(max_length=50, blank=True)
    
    friend2_first_name = models.CharField(max_length=50, blank=True)
    friend2_last_name = models.CharField(max_length=50, blank=True)
    friend2_nationality = models.CharField(max_length=35, blank=True)
    friend2_relationship = models.CharField(max_length=50, blank=True)
    friend2_passport_no = models.CharField(max_length=50, blank=True)
    
    friend3_first_name = models.CharField(max_length=50, blank=True)
    friend3_last_name = models.CharField(max_length=50, blank=True)
    friend3_nationality = models.CharField(max_length=35, blank=True)
    friend3_relationship = models.CharField(max_length=50, blank=True)
    friend3_passport_no = models.CharField(max_length=50, blank=True)
    
    friend4_first_name = models.CharField(max_length=50, blank=True)
    friend4_last_name = models.CharField(max_length=50, blank=True)
    friend4_nationality = models.CharField(max_length=35, blank=True)
    friend4_relationship = models.CharField(max_length=50, blank=True)
    friend4_passport_no = models.CharField(max_length=50, blank=True)
    
    aditional_info = models.TextField(max_length=1500, blank=True)
    
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/',blank=True)
    photo_1 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_11 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_12 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_13 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_14 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_15 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_16 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_17 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_18 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_19 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    photo_20 = models.ImageField(upload_to='apphotos/%Y/%m/%d/', blank=True)
    
    is_sent = models.BooleanField(default=True)
    application_form_date = models.DateTimeField(default=now, blank=True)
    
    def __str__(self):
        return self.pasport_number